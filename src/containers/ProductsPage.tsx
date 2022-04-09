import React, { useState, useEffect } from 'react';
import { Product } from '../interfaces/Product';
import ProductsList from '../components/ProductsList';
import CarouselSlider from '../components/CarouselSlider';
import ProductsFilter from '../components/ProductsFilter';
import ProductsSort from '../components/ProductsSort';
import { productsAPI } from '../API/productsAPI';
import { Filter } from '../interfaces/Filter';
import types from '../interfaces/Type';
import InfiniteScroll from 'react-infinite-scroller';

function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<Filter | null>({
    searchQuery: '',
    type: types['empty'],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loadMoreProducts, setLoadMoreProducts] = useState(false);

  const loadMore = () => {
    if (!loading && !isFiltered()) setLoadMoreProducts(true);
  };

  const isFiltered = () => {
    return filter.searchQuery !== '' || filter.type.value !== '';
  };

  const loadProducts = async function loadProducts() {
    setLoading(true);

    try {
      let numberOfProductsToLoad = 4;
      if (products.length === 0) numberOfProductsToLoad = 8;

      const data = await productsAPI.getProducts(
        numberOfProductsToLoad,
        filter
      );

      if (isFiltered()) {
        setProducts(data);
      } else {
        setProducts((products) => [...products, ...data]);
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    } finally {
      setLoading(false);
      setLoadMoreProducts(false);
    }
  };

  useEffect(() => {
    loadProducts();
    //eslint-disable-next-line
  }, [filter, loadMoreProducts]);

  const onFilterChange = (updatedFilter: Filter) => {
    setFilter({ ...filter, ...updatedFilter });
  };

  const onSortChange = (sortedProducts: Product[]) => {
    setProducts([...sortedProducts]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-1 col-lg-1"></div>
          <CarouselSlider></CarouselSlider>

          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="products-header">
              <h1>Products</h1>
              {error && (
                <div className="row">
                  <div className="card large error">
                    <section>
                      <p>
                        <span className="icon-alert inverse "></span>
                        {error}
                      </p>
                    </section>
                  </div>
                </div>
              )}
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-10">
                  {!error && filter && (
                    <ProductsFilter
                      filter={filter}
                      onFilterChange={onFilterChange}
                    ></ProductsFilter>
                  )}
                </div>
                <div className="col-md-12 col-md-12 col-lg-2 select-sort">
                  {!error && (
                    <ProductsSort
                      products={products}
                      onSortChange={onSortChange}
                    ></ProductsSort>
                  )}
                </div>
              </div>
            </div>

            {!error && (
              <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={true || false}
                loader={
                  !isFiltered() && (
                    <div className="center-page">
                      <span className="spinner primary"></span>
                      <p>Loading...</p>
                    </div>
                  )
                }
              >
                <ProductsList products={products} />
              </InfiniteScroll>
            )}
          </div>
          <div className="col-sm-12 col-md-1 col-lg-1"></div>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
