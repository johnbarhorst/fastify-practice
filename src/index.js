const fastify = require('fastify')();

fastify.get('/', (request, reply) => {
  reply.send({hello: 'world'});
});

fastify.register(require('./v1/routes/index'), { prefix: '/v1' });


fastify.listen({port: 3000}, (err, address) => {
  if(err) throw err;
})