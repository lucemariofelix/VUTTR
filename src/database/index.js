import Sequelize from 'sequelize';

import Tool from '../app/models/Tool';

import dbConfig from '../config/database';

const models = [Tool];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
