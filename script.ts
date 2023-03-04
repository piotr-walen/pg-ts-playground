import { connect } from "./connect";


// example script
connect(async ({ 
    sqls,   // object that contains loaded sql files
    client, // pg.Client
}) => {
    // you can access specific sql string by indexing with file path
    const sql = sqls['sql/test.sql']; 

    // the rest is native to node-pg
    // https://node-postgres.com/features/queries
    const params = ['foo'];
    const results = await client.query(sql, params);

    // log result rows using console.table
    console.table(results.rows);
})