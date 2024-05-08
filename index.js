/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const startingFuel = 5000; // remaining fuel (kg)
const fuelBurningRate = 0.5; // fuel burn rate (kg/s)


//This function is moved up here to declare it before using it in updatedVelocity. This is to catch a possible error before attempting to use it so that the program does not crash.

function calculateNewVelocity(initialVelocity, acceleration, time) { //function declared
  const accelerationInKmh = acceleration * 3.6; //This decimal converts m/s^2 into km/h to match the measurement unit for velocity.
  return initialVelocity + accelerationInKmh * time;
};


const endingDistance = initialDistance + initialVelocity * (time / 3600); //calcultes new distance. Divides the time by 3600 to convert it to hours to match the km/h of the velocity
const remainingFuel = startingFuel - fuelBurningRate * time; //calculates remaining fuel by subtracting the burnt fuel and its time from what was initially there.
const updatedVelocity = calculateNewVelocity(
  initialVelocity,
  acceleration,
  time
); //calculates new velocity based on acceleration.  The order in this argument matchest the order in the paramenters for correct value assignment. Otherwise, when run, values for initialVelocity would be assigned to the acceleration, causing errors.

// Pick up an error with how the function below is called and make it robust to such errors

console.log(`Corrected New Velocity: ${updatedVelocity} km/h`);
console.log(`Corrected New Distance: ${endingDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
