const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const checklistRoutes = require("./routes/checklistRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", checklistRoutes);

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
