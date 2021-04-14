import BaseController from '../utils/BaseController';
import { galaxyService } from '../services/GalaxyService';
import { starsService } from '../services/StarsService';

export class GalaxyController extends BaseController {
    constructor() {
        super('api/galaxy');
        this.router
            .get('', this.getAll)
            .post('', this.create)
            .get('/:id', this.getById)
            .get('/:id/stars', this.getAllStarsByGalaxy)
    }

    async getAll(req, res, next) {
        try {
            const galaxy = await galaxyService.find(req.query);
            return res.send(galaxy);
        } catch(error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try {
            const galaxy = await galaxyService.create(req.body);
            res.send(galaxy);
        } catch(error) {
            next(error)
        }
    }

    async getById(req, res, next) {
        try {
            const galaxy = await galaxyService.findOne({ _id: req.params.id})
            return res.send(galaxy);
        } catch(error) {
            next(error);
        }
    }

    async getAllStarsByGalaxy(req, res, next) {
        try {
            const stars = await starsService.find({ galaxyId: req.params.id});
            return res.send(stars)
        } catch(error) {
            next(error);
        }
    }
}