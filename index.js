require("dotenv-safe").config();
app = require("./api/server.js");
dbConn = require("./api/connectionDB");
userRouter = require("./api/routes/userRoutes");
postRouter = require("./api/routes/postRoutes");

dbConn
  .then((conn) => {
    console.log("DB connected!!");
    app.use("/api/user", userRouter);
    app.use("/api/posts", postRouter);
    app.use("/api", (req, res) => {
      res.send({
        status: true,
        msg: "Blog API",
      });
    });
  })
  .catch((err) => {
    console.log("Can't connect to DB");
    app.use((req, res) => {
      res.send("Banco caiu");
    });
  });
