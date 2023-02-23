import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();
const PORT = process.env.PORT || 8080;
configViewEngine(app);
initWebRoutes(app);

app.listen(PORT, (app) => {
  console.log(">>>JWT Backend is running on the port = " + PORT);
});
