const express = require("express");
const app = express();

const schema = require("./Schema/index");
const { graphqlHTTP } = require("express-graphql");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Your app is running on PORT:`, PORT);
});
