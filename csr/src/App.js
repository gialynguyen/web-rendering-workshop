import { useEffect, useState } from "react";
import { Product, Comment } from "components";
import "./App.css";

const API_BASE_URL = "http://localhost:9090/api";

const fetchProduct = () => {
  return fetch(API_BASE_URL + "/products", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

const fetchComments = () => {
  return fetch(API_BASE_URL + "/comments", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => res.data);
};

function App() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(function firstLoadProductList() {
    fetchProduct().then((products) => {
      setProducts([...products]);
    });
  }, []);

  useEffect(function firstLoadComments() {
    fetchComments().then((comments) => {
      setComments([...comments]);
    });
  }, []);

  return (
    <div className="App">
      <div className="product">
        <h2>Product Area</h2>
        {products.map(({ id, name, price }) => (
          <Product key={id} name={name} price={price} />
        ))}
      </div>
      <div className="comment">
        <h2>Comment Area</h2>
        {comments.map(({ id, content }) => (
          <Comment key={id} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
