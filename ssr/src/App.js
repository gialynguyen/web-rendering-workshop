import React from "react";
import { Product, Comment } from "components";

function App({ products, comments }) {
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
