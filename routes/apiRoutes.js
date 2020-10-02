// const db = require("../models/")
const Workout = require("../models/workout.js");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create(req.body)
            .then(dbWorkout => { res.json(dbWorkout);
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            });
    });


    // $push operator appends a Value to an Array
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
        )
            .then(dbWorkout => { 
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log("err", err)
                res.json(err)
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({})
        .then(dbWorkout => {
            console.log(dbWorkout)
          res.json(dbWorkout);
        });
      });
}