
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//import imagem1 from "../assets/image-homepage.svg";

const SaibaMais = () => {

  const url = "http://localhost:3000/products";
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      const selectedProduct = data.find(product => product.id === parseInt(id));
      setProduct(selectedProduct);
    }

    fetchData();

  }, [id]);

  return (
    <div>
      <p>Id do Produto: {id}</p>
      {product && product.descricao.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  )
}

export default SaibaMais;



