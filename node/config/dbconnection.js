import mysql from "mysql2";
import dbconfig from "./dbconfig.js";

export const createDbConnection = async (sql, values) => {
	const connection = mysql.createConnection(dbconfig);

	const queryPromise = new Promise((resolve, reject) => {
		connection.query(sql, values, (error, results) => {
			if (error) {
				reject(error);
			} else {
				resolve(results);
			}
		});
	});

	try {
		const [queryResults] = await Promise.all([queryPromise]);
		return queryResults;
	} finally {
		connection.end();
	}
};

export default createDbConnection;
