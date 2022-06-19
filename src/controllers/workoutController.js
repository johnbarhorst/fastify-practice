workoutService = require('../services/workoutService');

function getAllWorkouts(request, reply) {
  const allWorkouts = workoutService.getAllWorkouts();
  reply.send(allWorkouts);
}

function getOneWorkout(request, reply) {
  reply.send('Get one workout');
}

function createNewWorkout(request, reply) {
  const {name, mode, equipment, exercise, trainer} = request.body;
  if(!name, !mode, !equipment, !exercise, !trainer) {
    
  }
}

function updateOneWorkout(request, reply) {
  reply.send('Update Workout');
}

function deleteOneWorkout(request, reply) {
  reply.send('Delete one workout');
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}