import pg from "pg";
import { globSync } from "glob";
import fs from "fs";
import dotenv from 'dotenv';


const withClient = async (cb: (client: pg.Client) => Promise<void>) => {
    dotenv.config();

	const client = new pg.Client({
		host: "localhost",
		port: 5432,
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
	});
	await client.connect();
	await cb(client);
	client.end();
};

const withSqls = async (cb: (sqls: Record<string, string>) => Promise<void>) => {
	const sqls: Record<string, string> = {};
	globSync("./sql/**/*.sql").forEach((filepath) => {
		sqls[filepath] = fs.readFileSync(filepath).toString();
	});
	return cb(sqls);
};

export const connect = async (
	cb: (args: { sqls: Record<string, string>; client: pg.Client }) => Promise<void>,
) =>  withClient(async (client) => await withSqls((sqls) => cb({ sqls, client })));
