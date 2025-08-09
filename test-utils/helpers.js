"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teardownDatabase = exports.setupDatabase = void 0;
const pg_1 = require("pg");
const setupDatabase = async () => {
    const client = new pg_1.Client();
    await client.connect();
    await client.query('BEGIN');
    // Add more setup logic if necessary
    await client.end();
};
exports.setupDatabase = setupDatabase;
const teardownDatabase = async () => {
    const client = new pg_1.Client();
    await client.connect();
    await client.query('ROLLBACK');
    await client.end();
};
exports.teardownDatabase = teardownDatabase;
