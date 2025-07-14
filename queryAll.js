import { sequelize, UserActivity } from './db.js';

await sequelize.sync();

const data = await UserActivity.findAll();
console.table(data.map(d => d.toJSON()));

await sequelize.close();
