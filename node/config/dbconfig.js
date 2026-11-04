import { config } from "dotenv";

config();

const dbConfig = {
	host: process.env.MYSQL_URL || "db",
	user: process.env.MYSQL_USER || "user",
	password: process.env.MYSQL_PASSWORD || "password",
	database: process.env.MYSQL_DATABASE || "challenge",
};

export default dbConfig;
