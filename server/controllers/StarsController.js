import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";
import { moonsService } from '../services/MoonsService';
import { planetsService } from '../services/PlanetsService';

export class StarsController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id", this.getById)
      .get('/:id/planets', this.getAllPlanetsByStar);
  }

  async getAll(req, res, next) {
    try {
      const stars = await starsService.find(req.query);
      return res.send(stars);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      const star = await starsService.create(req.body);
      res.send(star);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      const star = await starsService.findOne({ _id: req.params.id });
      return res.send(star);
    } catch (error) {
      next(error);
    }
  }

  async getAllPlanetsByStar(req, res, next) {
    try {
      const planets = await planetsService.find({ starId: req.params.id });
      return res.send(planets);
    } catch(error) {
      next(error);
    }
  }
}
