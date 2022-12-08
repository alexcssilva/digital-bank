require("dotenv").config();
const app = require("./api");

const PORT = process.env.API_PORT || 3001;

app.get("/", (_req, res) => {
  res.send();
});

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
