// const yargs = require("yargs");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const weatherTracker = (city) => {
  geoCode(city, (error, locationData) => {
    if (error) {
      return console.log("Error: ", error);
    }

    const { latitude, longitude } = locationData;

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("Error: ", error);
      }

      console.log("Location Data: ", locationData.location);
      console.log("Current Weather: ", forecastData);
    });
  });
};

const city = process.argv[2];

if (!city) {
  return console.log("Kindly indicate city eg. node app.js Lagos ");
}

weatherTracker(city);

// yargs.command({
//   command: "weather",
//   describe: "Choose a city to show weather conditions",
//   handler: function (argv) {
//     // console.log("List a note");
//     weatherTracker(argv.city);
//   },
//   builder: {
//     city: {
//       describe: "get city weather",
//       demandOption: true,
//       type: "string",
//     },
//   },
// });

// yargs.parse();
