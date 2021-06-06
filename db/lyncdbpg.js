/*
    "db.js"
    This file holds a simple database api
    currently for postgres
*/
// Database class specific to Postgres
class LyncDatabasePG
{
    constructor()
    {
        this.pool = require("./pool");
    }
    // function used to create auth user table.
    CreateTableAuthUser = async (table_name = "auth_user") =>
    {
        // query
        let query = 'CREATE TABLE IF NOT EXISTS auth_user ( username VARCHAR(50) NOT NULL UNIQUE,name     VARCHAR(50) NOT NULL       ,email    VARCHAR(30) NOT NULL UNIQUE,pass     VARCHAR(20) NOT NULL);';
        // query parameters
        let q_args = [table_name];
        try {
            let res = await this.pool.query(query);
            console.log("CreateTableAuthUser", "\n", res);
            return true;
        } catch(err) {
            console.error("CreateTableAuthUser", "\n", err);
            return false;
        }
    }
    // function used to create auth expired tokens table.
    CreateTableAuthExpiredTokens = async (table_name = "auth_expired_tokens") =>
    {
        // query
        let query = 'CREATE TABLE IF NOT EXISTS auth_expired_tokens ( tokens VARCHAR(100) NOT NULL );';
        // query parameters
        let q_args = [table_name];
        try {
            let res = await this.pool.query(query);
            console.log("CreateTableAuthExpiredTokens", "\n", res);
            return true;
        } catch(err) {
            console.error("CreateTableAuthExpiredTokens", "\n", err);
            return false;
        }
    }
    // function for deleting auth_user table.
    DeleteTableAuthUser = async (table_name = "auth_user") =>
    {
        let query = `DROP TABLE IF EXISTS auth_user;`;
        let q_args = [table_name];
        try {
            let res = await this.pool.query(query);
            console.log("DeleteTableAuthUser", "\n", res);
            return true;
        } catch(err) {
            console.error("DeleteTableAuthUser", "\n", err);
            return false;
        }
    }
    // function for deleting auth_user table.
    DeleteTableAuthExpiredTokens = async (table_name = "auth_expired_tokens") =>
    {
        let query = `DROP TABLE IF EXISTS auth_expired_tokens;`;
        let q_args = [table_name];
        try {
            let res = await this.pool.query(query);
            console.log("DeleteTableAuthExpiredTokens", "\n", res);
            return true;
        } catch(err) {
            console.error("DeleteTableAuthExpiredTokens", "\n", err);
            return false;
        }
    }

    Reload = async () =>
    {
        let status_d_authuser = await this.DeleteTableAuthUser();
        let status_d_expiredtoken = await this.DeleteTableAuthExpiredTokens();
        let status_c_authuser = await this.CreateTableAuthUser()
        let status_c_expiredtoken = await this.CreateTableAuthExpiredTokens();

        let reload_status = {
            status_d_authuser: status_d_authuser,
            status_d_expiredtoken: status_d_expiredtoken,
            status_c_authuser: status_c_authuser,
            status_c_expiredtoken: status_c_expiredtoken
        };

        return reload_status;
    }
}


module.exports = LyncDatabasePG;

