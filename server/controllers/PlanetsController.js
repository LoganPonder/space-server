import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id", this.getById);
  }

  async getAll(req, res, next) {
    try {
      const planets = await planetsService.find(req.query);
      return res.send(planets);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const planet = await planetsService.create(req.body);
      res.send(planet);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const planet = await planetsService.findOne({ _id: req.params.id });
      return res.send(planet);
    } catch (error) {
      next(error);
    }
  }
}
