import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async find(query = {}) {
    return await dbContext.Stars.find(query);
  }

  async create(body) {
    return await dbContext.Stars.create(body);
  }

  async findOne(id) {
    let data = dbContext.Stars.findOne({ _id: id });
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return data;
  }
}

export const starsService = new StarsService();
