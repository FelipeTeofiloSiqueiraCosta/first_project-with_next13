interface ProductsProps {
  params: {
    id: string;
  };
}
export default function Product({ params: { id } }: ProductsProps) {
  return <>PorducId: {id}</>;
}
