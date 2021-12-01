const config = {
    development: {
        port: 5000,
        DB_CONNECTION: 'mongodb+srv://dnikolov:netcarshow@cluster0.jwobt.mongodb.net/ePUBlicritic?retryWrites=true&w=majority',
        COOKIE_NAME: 'user_cookie',
        SALT_ROUNDS: 10,
        JWT_SECRET: 'reactrules',
    },

    production: {
        port: 5000,
        DB_CONNECTION: 'mongodb+srv://dnikolov:netcarshow@cluster0.jwobt.mongodb.net/ePUBlicritic?retryWrites=true&w=majority',
        COOKIE_NAME: 'user_cookie',
        SALT_ROUNDS: 10,
        JWT_SECRET: 'reactrules',
    }
};

export default config[process.env.NODE_ENV.trim()];