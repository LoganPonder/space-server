import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class GalaxyService {
    async find(query = {}) {
        return await dbContext.Galaxy.find(query);
    }

    async create(body) {
        return await dbContext.Galaxy.create(body);
    }

    async findOne(id) {
        let data = dbContext.Galaxy.findOne({ _id: id })
        if(!data) {
            throw new BadRequest('Invalid Id')
        }
        return data;
    }
}

export const galaxyService = new GalaxyService;