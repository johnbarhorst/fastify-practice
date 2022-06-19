const {updateOneWorkout, getOneWorkout, getAllWorkouts, deleteOneWorkout, createNewWorkout} = require('../../controllers/workoutController');

module.exports = function(fastify, opts, done) {

  fastify.get('/', getAllWorkouts);

  fastify.get('/:workoutId', getOneWorkout);

  fastify.post('/', createNewWorkout);

  fastify.patch('/:workoutId', updateOneWorkout);

  fastify.delete('/:workoutId', deleteOneWorkout);
  done();
}