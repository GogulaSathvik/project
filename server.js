const fastify = require('fastify');

const init = async ({ config, static_config }) => {

    const app = fastify({});
    app.decorate('config', config);
    app.decorate('static_config', static_config);
    await app.ready(err => {
        if (err) throw err, console.log(err)
    });
    return app;
};
const run = app => app.listen({ port: app.config.config.PORT, 
    host: app.config.config.HOST })
    .then((address) => {
    console.log("Application Started:" +address);
})
.catch(err => {
console.log("Server Started Failed" + err);
});
module.exports = { init, run }