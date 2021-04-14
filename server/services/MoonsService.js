import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async find(query = {}) {
    return await dbContext.Moons.find(query);
  }

  async create(body) {
    return await dbContext.Moons.create(body);
  }

  async findOne(id) {
    let data = dbContext.Moons.findOne({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const moonsService = new MoonsService();
