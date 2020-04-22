"use stric";

const app = require("./server");

app.listen(app.get("port"), function () {
  console.log(`Server Running on PORT : ${app.get("port")}`);
});
