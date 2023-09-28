import Product from './Product';

export default interface ProductCardProps {
  product: Product;
  index: number;
  loading: boolean;
}