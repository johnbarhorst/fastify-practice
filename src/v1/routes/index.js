module.exports = function(fastify, opts, done ) {
  fastify.register(require('./workoutRoutes'), { prefix: '/workouts'});
  fastify.get('/', (request, reply) => {
    reply.send({hello: 'world'});
  });
  done();
}