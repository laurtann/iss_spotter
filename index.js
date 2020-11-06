const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(passTimes);
});

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

// printPassTimes([ { duration: 443, risetime: 1604715794 },
//   { duration: 644, risetime: 1604721457 },
//   { duration: 640, risetime: 1604727272 },
//   { duration: 619, risetime: 1604733126 },
//   { duration: 646, risetime: 1604738953 } ]);

// printPassTimes(test);



// const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, } = require('./iss');

// // test of fetchMyIP
// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// // test of fetchCoordsByIP { ip: '134.41.180.102' }
// fetchCoordsByIP('134.41.180.102', (error, coords) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned fetched coords from IP: ' , coords);
// });

// // test of fetchISSFlyOverTimes
// let exampleCoords =  { latitude: 44.6643, longitude: -63.6002 };
// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:' , passTimes);
// });

// // result obj
// [ { duration: 443, risetime: 1604715794 },
  // { duration: 644, risetime: 1604721457 },
  // { duration: 640, risetime: 1604727272 },
  // { duration: 619, risetime: 1604733126 },
  // { duration: 646, risetime: 1604738953 } ]