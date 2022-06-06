const app = require("./app");
const connect = require("./config/db");
app.listen(5400, async () => {
  await connect();
  console.log("listning to the port 5400");
});
