import { Router } from "express";

export class HotDaysRouter {
  private readonly router = Router();

  constructor() {
    this.router.get("/fun", (_req, res) => {
      console.log("Hot Days");
      res.send("Route is working!");
    });
  }

  getRouter(): Router {
    return this.router;
  }
}
