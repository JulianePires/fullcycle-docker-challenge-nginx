import { faker } from "@faker-js/faker";
import express from "express";
import createDbConnection from "./config/dbconnection.js";

const PORT = process.env.PORT || 3000;

export async function createApp() {
	const CREATE_TABLE_SQL = `CREATE TABLE IF NOT EXISTS \`people\` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;
	const CLEAR_TABLE_SQL = "DELETE FROM `people`";
	const INSERT_SQL = "INSERT INTO `people` (`name`) VALUES (?)";
	const SELECT_SQL = "SELECT * FROM `people`";
	const names = [];

	await createDbConnection(CREATE_TABLE_SQL);
	await createDbConnection(CLEAR_TABLE_SQL);

	const app = express();

	app.get("/", async (_, res) => {
		try {
			const randomName = faker.person.fullName();
			names.push(randomName);
			await createDbConnection(INSERT_SQL, [randomName]);

			const allNames = await createDbConnection(SELECT_SQL);

			const html = `
        <html>
        <head>
          <title>Full Cycle Nginx Challenge</title>
        </head>
        <body>
          <h1>Full Cycle Rocks!</h1>
            <ol>
              ${allNames.map((res) => `<li>${res.name}</li>`).join("")}
            </ol>
          </body>
        </html>
      `;

			res.send(html);
		} catch (error) {
			console.error("Error retrieving names from the database:", error);
			res.status(500).send("Internal Server Error");
		}
	});

	return app;
}

const server = await createApp();

server.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`);
});
