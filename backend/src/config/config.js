const config = {
    development: {
        port: 3000,
        DB_CONNECTION: 'mongodb+srv://dnikolov:netcarshow@cluster0.jwobt.mongodb.net/ePUBlicritic?retryWrites=true&w=majority',
    },

    production: {
        port: 3000,
        DB_CONNECTION: 'mongodb+srv://dnikolov:netcarshow@cluster0.jwobt.mongodb.net/ePUBlicritic?retryWrites=true&w=majority',
    }
};

export default config[process.env.NODE_ENV.trim()];