const express = require("express");

const app = express();

// Allow requests from all origins
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  // Hardcoded response for '1' and '0'
  const responseData = "1"; // Change this value as needed
  res.send(responseData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
