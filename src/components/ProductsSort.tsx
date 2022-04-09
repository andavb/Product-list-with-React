import React, { useState, ChangeEvent } from 'react';
import sortTypes from '../interfaces/Sort';
import { Product } from '../interfaces/Product';
import { Form } from 'react-bootstrap';

interface ProductSortProps {
  products: Product[];
  onSortChange: (product: Product[]) => void;
}

function ProductSort({
  products: initialProducts,
  onSortChange,
}: ProductSortProps) {
  const [sort, setSort] = useState('');

  const handleOnSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSort(value);

    switch (sortTypes[value]) {
      case sortTypes.PriceASC:
        sortPriceASC(initialProducts);
        break;
      default:
        setSortedProducts(initialProducts);
    }
  };

  //Should write generic method for sorting
  const sortPriceASC = (unsortedProducts: Product[]) => {
    unsortedProducts.sort((a, b) =>
      a.price! > b.price! ? -1 : a.price! < b.price! ? 1 : 0
    );
    setSortedProducts(unsortedProducts);
  };

  const setSortedProducts = (sortedProducts: Product[]) => {
    onSortChange(sortedProducts);
  };

  return (
    <Form.Select name="sort" value={sort} onChange={handleOnSortChange}>
      {Object.keys(sortTypes).map((key) => (
        <option key={key} value={key}>
          {sortTypes[key]}
        </option>
      ))}
    </Form.Select>
  );
}

export default ProductSort;
