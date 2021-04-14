import GalaxySchema from '../models/Galaxy';
import mongoose from "mongoose";
import StarSchema from '../models/Star';
import PlanetSchema from '../models/Planet';
import MoonSchema from '../models/Moon';

class DbContext {
  Galaxy = mongoose.model('Galaxy', GalaxySchema);
  Stars = mongoose.model('Star', StarSchema);
  Planets = mongoose.model('Planet', PlanetSchema);
  Moons = mongoose.model('Moons', MoonSchema);
}

export const dbContext = new DbContext();
