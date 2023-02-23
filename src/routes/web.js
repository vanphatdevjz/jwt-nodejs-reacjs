import express from "express";
import homeController from "../controller/homeController";
const router = express.Router();
/**
 *
 * @param {*} app : express app
 * @returns
 */
const initWebRoutes = (app) => {
  //path, handler
  router.get("/", homeController.handleHelloWorld);
  router.get("/user", homeController.handleUsePage);
  return app.use("/", router);
};
export default initWebRoutes;
