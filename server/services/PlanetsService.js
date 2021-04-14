import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async find(query = {}) {
    return await dbContext.Planets.find(query);
  }

  async create(body) {
    return await dbContext.Planets.create(body);
  }

  async findOne(id) {
    let data = dbContext.Planets.findOne({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const planetsService = new PlanetsService();
