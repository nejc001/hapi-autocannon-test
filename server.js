'use strict';
const Hapi = require('hapi');
const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  /*await server.register(require('inert'));
  await server.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: false,
      logEvents: ['request-error']
    }
  });*/

  server.route([{
    method: 'POST', path: '/', handler: async (request, h) => {
      console.log("yee haw");
      return { odgovor: 'podatek' };
    }
  }]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
  return server;
};

process.on('unhandledRejection', (err) => {
  process.exit(1);
});

init();