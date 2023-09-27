import { useOutletContext, useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();

  return (
    <>
      <h1>Product {id} </h1>
      {/* <h1>Product {id} {obj.home}</h1> */}
    </>
  );
}
