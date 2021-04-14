import BaseController from "../utils/BaseController";
import { moonsService } from "../services/MoonsService";

export class MoonsController extends BaseController {
  constructor() {
    super("api/moons");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id", this.getById);
  }

  async getAll(req, res, next) {
    try {
      const moons = await moonsService.find(req.query);
      return res.send(moons);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const moon = await moonsService.create(req.body);
      res.send(moon);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const moon = await moonsService.findOne({ _id: req.params.id });
      return res.send(moon);
    } catch (error) {
      next(error);
    }
  }
}
