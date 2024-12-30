import {get} from 'env-var';
import dotenv from "dotenv";

dotenv.config();

export const envs = {
    APP_URL: get('APP_URL').default('blk-tax.onrender.com').asString(),
    PORT: get('PORT').default(4000).required().asInt(),
    API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
    DEFAULT_API_PREFIX: get('DEFAULT_API_PREFIX').default('/api/v1').asString(),
    NODE_ENV: get('NODE_ENV').default('development').asString(),
    JWT_SEED: get('JWT_SEED').required().asString(),
    DB: {
        HOST: get('DB_HOST').required().asString(),
        PORT: get('DB_PORT').required().asPortNumber(),
        USERNAME: get('DB_USERNAME').required().asString(),
        PASSWORD: get('DB_PASSWORD').asString(),
        NAME: get('DB_NAME').required().asString(),
        DIALECT: get('DB_DIALECT').required().asString()
    },
    // GOOGLE_CLIENT_ID: get('GOOGLE_CLIENT_ID').required().asString(),
    // GOOGLE_CLIENT_SECRET: get('GOOGLE_CLIENT_SECRET').required().asString(),
    SESSION_SECRET: get('SESSION_SECRET').required().asString(),
    // MAILGUN_API_KEY: get('MAILGUN_API_KEY').required().asString(),
    // MAILGUN_SIGNING_KEY: get('MAILGUN_SIGNING_KEY').required().asString(),
    // MAILGUN_DOMAIN: get('MAILGUN_DOMAIN').required().asString(),
    // MAILGUN_SENDER_ADDRESS: get('MAILGUN_SENDER_ADDRESS').required().asString(),
    REDIS_HOST: get('REDIS_HOST').required().asString(),
    REDIS_PORT: get('REDIS_PORT').required().asInt(),
    // FILE_STORAGE_REGION: get('FILE_STORAGE_REGION').required().asString(),
    // FILE_STORAGE_ENDPOINT: get('FILE_STORAGE_ENDPOINT').required().asString(),
    // FILE_STORAGE_ACCESS_KEY_ID: get('FILE_STORAGE_ACCESS_KEY_ID').required().asString(),
    // FILE_STORAGE_SECRET_ACCESS_KEY: get('FILE_STORAGE_SECRET_ACCESS_KEY').required().asString()
    // SMTP_HOST: get('SMTP_HOST').required().asString(),
    // SMTP_PORT: get('SMTP_PORT').required().asInt(),
    // SMTP_PASSWORD: get('SMTP_PASSWORD').required().asString(),
    // SMTP_USERNAME: get('SMTP_USERNAME').required().asString()
};
