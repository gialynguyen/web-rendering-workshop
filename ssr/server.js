import express from "express";
import axios from "axios";
import * as path from "path";
import ReactDOMServer from "react-dom/server";
import React from "react";
import App from "./src/App";

const PORT = 3001;

const app = express();

app.get("/", async (req, res) => {
  const [products, comments] = await Promise.all([
    axios
      .get("http://localhost:9090/api/products")
      .then((res) => res.data.data),
    axios
      .get("http://localhost:9090/api/comments")
      .then((res) => res.data.data),
  ]);

  const initialData = {
    products,
    comments,
  };

  const component = ReactDOMServer.renderToString(
    <App products={products} comments={comments} />
  );

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <title>SSR example</title>
      <meta name="description" content="SSR example">
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          /* Background color to go to page edge. */
          margin: 0;
        }
        body > * {
          /* Prevent content from going to the page edge - especially on mobile.
            Note this should not be on body itself, otherwise it gets white edges. */
          padding-left: 15px;
          padding-right: 15px;
        }
      </style>
      <script>
        window.__INIT_DATA__ = ${JSON.stringify(initialData)};
      </script>
      <script defer src="/static/js/main.0dc78a32.js"></script>
    </head>
    <body>
      <div id="root">${component}</div>
    </body>
  </html>
  `;

  res.send(html);
});

const publicDir = path.resolve(__dirname, "build");
app.use("/static", express.static(publicDir));

app.listen(PORT, () => {
  console.log("SSR started");
});
