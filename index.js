const database=require('./Connectdb');
const Person = require('./Models/PersonModel');

//Create and Save a Record of a Model:

let p1 = new Person({
  name: "Karim",
  age: 25,
  favoriteFoods: ["pasta","seafood"]
});
p1.save(function (err, data) {
  console.log(data);
});
//Create Many Records with model.create()

let persons = [
    {
      name: "Ahmed",
      age: 5,
      favoriteFoods: ["choclate"]
    },
    {
      name: "Roukaya",
      age: 26,
      favoriteFoods: ["coscous", "pizza"]
    },
    {
      name: "Zizou",
      age: 30,
      favoriteFoods: ["saumon","burger","salade"]
    },
    {
        name: "Mary",
        age: 20,
        favoriteFoods: ["burritos"]
      }
  ];
  Person.create(persons, function (err, data) {
    console.log(data);
  });
  //Use model.find() to Search Your Database

Person.find({ name:"Roukaya"}, function (err, data) {
    console.log(data);
  });
  function searchByFood(search) {
    Person.findOne({ favoriteFoods: { $regex: search } }, function (err, data) {
      console.log(data);
    });
  }
  searchByFood("pasta");
//Use model.findById() to Search Your Database By _id

function findByPersonId(personId) {
    Person.findById(personId, function (err, data) {
      console.log( data);
    });
  }
  findByPersonId("62c6db62173c4455709a163a");
  // Classic Updates by Running Find, Edit, then Save

function findPersonAndUpdate(personId) {
  Person.findById(personId, function (err, data) {
    data.favoriteFoods.push("fries");
    data.save().then((d) => {
      console.log(d);
    });
  });
}

findPersonAndUpdate("62c6db62173c4455709a163a");

//Perform New Updates on a Document Using model.findOneAndUpdate()

function findPersonAndUpdate(name) {
  Person.findOneAndUpdate(
    { name },
    { age: 23 },
    {
      new: true,
    }
  ).then((data) => {
    console.log(data);
  });
}
findPersonAndUpdate("Roukaya");
//Delete One Document Using model.findByIdAndRemove

function findPersonAndRemove(personId) {
    Person.findByIdAndRemove(personId).then((data) => {
      console.log(data);
    });
  }
  findPersonAndRemove("62c6e07250f97fe1654c2a4b");
  //MongoDB and Mongoose Delete Many Documents with model.remove()

Person.remove({ name: "Mary" }).then((data) => {
    console.log(data.deletedCount);
  });
  
//Chain Search Query Helpers to Narrow Search Results

function done(err, data) {
    console.log(data);
  }
  Person.find({ favoriteFoods: { $regex: "burritos" } })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec(done);
  