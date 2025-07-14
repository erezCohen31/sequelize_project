import { sequelize, UserActivity } from './db.js';

const names = ['Charlie', 'Dana', 'Eva', 'Frank'];
const activities = ['Comment', 'Like', 'Share', 'Logout'];

await sequelize.sync();



setInterval(async () => {
    let count = await UserActivity.count();
    if (count >= 50) {
        await sequelize.close();
        process.exit(0);
    }

    const name = names[Math.floor(Math.random() * names.length)];
    const activity = activities[Math.floor(Math.random() * activities.length)];

    await UserActivity.create({ name, activity });
    console.log(`✅ Insertion : ${name} - ${activity}`);
}, 10000);

setInterval(async () => {
    const users = await UserActivity.findAll({ raw: true });
    console.table(users);
}, 30000);
