import { Product } from '../interfaces/Product';
import ProductCard from './ProductCard';
import { Row, Col } from 'react-bootstrap';

interface ProductListProps {
  products: Product[];
}

function ProductsList({ products }: ProductListProps) {
  return (
    <>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={Math.floor(Math.random() * 100000) + 1}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductsList;
