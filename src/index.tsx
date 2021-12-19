import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Compra de nft",
          type: "deposit",
          category: "renda passiva",
          amount: 2600,
          createAt: new Date(),
        },
        {
          id: 2,
          title: "Compra de cachaça",
          type: "withdraw",
          category: "bar",
          amount: 500,
          createAt: new Date("2021-10-12 22:00:00"),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
