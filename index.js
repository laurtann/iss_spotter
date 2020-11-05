const { nextISSTimesForMyLocation } = require('./iss');

let passTimes = [ { duration: 577, risetime: 1604649038 },
  { duration: 653, risetime: 1604654781 },
  { duration: 652, risetime: 1604660595 },
  { duration: 655, risetime: 1604666412 },
  { duration: 622, risetime: 1604672223 } ];

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

  nextISSTimesForMyLocation((error, passTimes) => {
    if (error) {
      return console.log("It didn't work!", error);
    }
    console.log(passTimes);
    // success, print out the deets!
    printPassTimes(passTimes);
  });



// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('134.41.180.102', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned fetched coords from IP: ' , coords);
// });

// const { fetchISSFlyOverTimes } = require('./iss');

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });



