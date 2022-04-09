import React from 'react';
import { Product } from '../interfaces/Product';
import { Link } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

function formatSummary(summary: string): string {
  if (summary) return summary.substring(0, 100) + '...';
  return summary;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard(props: ProductCardProps) {
  const { product } = props;

  const calculatePercentage = (rating: number) => {
    return (100 * rating) / 5;
  };

  return (
    <>
      <Link to={'/product/' + product.id} style={{ textDecoration: 'none' }}>
        <div className="card">
          <img src={product.image} alt={product.title} />
          <section className="section light">
            <h5 className="strong">
              <strong>{product.title}</strong>
            </h5>
            <p
              dangerouslySetInnerHTML={{
                __html: formatSummary(product.summary ? product.summary : ''),
              }}
            ></p>
            <hr />
            <div className="product-overview">
              <div className="product-price">
                <span>
                  {product.price} {product.currency}
                </span>
              </div>
              <div className="product-rating">
                <Rating
                  ratingValue={
                    product.rating ? calculatePercentage(product.rating) : 0
                  }
                  iconsCount={5}
                  readonly={true}
                  allowHalfIcon={true}
                  size={30}
                />
              </div>
            </div>
          </section>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
