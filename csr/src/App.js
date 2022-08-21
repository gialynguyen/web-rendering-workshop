import { useEffect } from "react";
import { Product } from "components/product";
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
  useEffect(() => {
    fetchComments().then((comments) => {
      console.log("comments:", comments);
    });
  }, []);

  useEffect(() => {
    fetchProduct().then((products) => {
      console.log("products:", products);
    });
  }, []);

  return (
    <div className="App">
      <div className="product">Product Area</div>
      <div className="comment">Comment Area</div>
    </div>
  );
}

export default App;
