const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const MONGO_QUESTION_LIST_URI =
  "mongodb://admin:admin@mernprojectcluster-shard-00-00-8xsck.gcp.mongodb.net:27017,mernprojectcluster-shard-00-01-8xsck.gcp.mongodb.net:27017,mernprojectcluster-shard-00-02-8xsck.gcp.mongodb.net:27017/faqApp?ssl=true&replicaSet=MernProjectCluster-shard-0&authSource=admin&retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI || MONGO_QUESTION_LIST_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Mongoose is conected");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//HTTP request logger
app.use(morgan("tiny"));

// Router
const routes = require("./routes/api");
const faqRoutes = require("./routes/faq");
const saveGameRoutes = require("./routes/game");
const findGameRoutes = require("./routes/memory");
app.use("/api/", routes);
app.use("/faq/", faqRoutes);
app.use("/game/", saveGameRoutes);
app.use("/game/", findGameRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build", "index.html"));
  });
}
app.listen(PORT, console.log(`Server running on ${PORT}`));
