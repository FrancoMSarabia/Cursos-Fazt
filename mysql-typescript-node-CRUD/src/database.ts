import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'sasa',
        database: 'node_mysql_ts',
        connectionLimit: 10
    });

    return connection;
}