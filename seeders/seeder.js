  
var mongoose = require("mongoose");
var db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutdb",
  { useNewUrlParser: true }
);

var workouts =[
    {
    workout: [
        {
        date: "May 1, 2020",
        startTime: "7:00am",
        endTime: "8:00am"
    }]
},
{
    workout: [
    {
        date: "May 3, 2020",
        startTime: "7:00am",
        endTime: "8:00am"
    }]
},
{
    workout: [
            {
        date: "May 5, 2020",
        startTime: "7:00am",
        endTime: "8:00am"
    }
    ]
}
]

db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workouts))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });