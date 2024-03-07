// select * from students 


db.students.find()

// insert new student 
db.students.insertOne({"name":"Ali", salary:30000, currency:"KWD"})

// 
db.students.find()


/// in fully js env.

name = "ahmed"

print(name)






/// prepare instructor collection


let instructorsArray = [{
    _id: 6, firstName: "noha", lastName: "hesham",
    age: 21, salary: 3500,
    address: { city: "cairo", street: 10, building: 8 },
    courses: ["js", "mvc", "signalR", "expressjs"]
},

{
    _id: 7, firstName: "mona", lastName: "ahmed",
    age: 21, salary: 3600,
    address: { city: "cairo", street: 20, building: 8 },
    courses: ["es6", "mvc", "signalR", "expressjs"]
},

{
    _id: 8, firstName: "mazen", lastName: "mohammed",
    age: 21, salary: 7040,
    address: { city: "Ismailia", street: 10, building: 8 },
    courses: ["asp.net", "mvc", "EF"]
},

{
    _id: 9, firstName: "ebtesam", lastName: "hesham",
    age: 21, salary: 7500,
    address: { city: "mansoura", street: 14, building: 3 },
    courses: ["js", "html5", "signalR", "expressjs", "bootstrap"]
}

    , {
    "_id": 10,
    "firstName": "badr",
    "lastName": "ahmed",
    "age": 22.0,
    "salary": 5550.0,
    "address": {
        "city": "cairo",
        "street": 10.0,
        "building": 8.0
    },
    "courses": [
        "sqlserver",
        "mvc",
        "signalR",
        "asp.net"
    ]
},
{
    "_id": 2,
    "firstName": "mona",
    "lastName": "mohammed",
    "age": 21.0,
    "salary": 3600.0,
    "address": {
        "city": "mansoura",
        "street": 20.0,
        "building": 18.0
    },
    "courses": [
        "es6",
        "js",
        "mongodb",
        "expressjs"
    ]
},
{
    "_id": 3,
    "firstName": "mazen",
    "lastName": "ali",
    "age": 30.0,
    "salary": 7010.0,
    "address": {
        "city": "cairo",
        "street": 10.0,
        "building": 5.0
    },
    "courses": [
        "asp.net",
        "mvc",
        "EF"
    ]
},
{
    "_id": 4,
    "firstName": "ebtesam",
    "lastName": "ahmed",
    "age": 28.0,
    "salary": 6200.0,
    "address": {
        "city": "mansoura",
        "street": 14.0,
        "building": 7.0
    },
    "courses": [
        "js",
        "html5",
        "signalR",
        "expressjs",
        "bootstrap",
        "es6"
    ]
}];

// insert many instructors 


db.instructors.insertMany(instructorsArray) // array of json objects





db.instructors.insertOne({
    firstName:"Noha", 
    lastName: "Shehab", 
    city: "Mansoura", 
    track : "telecom", 
    age: 31
    })



// get all instructors 
    
  db.instructors.find()
    
    
///*********** create empty collection ***************
    db.createCollection("subjects")
    
    
///**************show created collections ****************
    
show collections
    
    
/// ****************** drop the collection 
    db.subjects.drop()
    
    show collections
    
    
/// ********************************************

// ***** select * from instructors;

db.instructors.find()
    
    
// ** get instructors _id:6  select * from instructors where id=6;;
// *** we need to add condition to find 
    
    
   db.instructors.find({_id:6} // condition
   
   )
    
    
    
    db.instructors.insertOne({
    "_id" : 16,
    "firstName" : "noha",
    "lastName" : "hesham",
    "age" : 21.0,
    "salary" : 3500.0,
    "address" : {
        "city" : "cairo",
        "street" : 10.0,
        "building" : 8.0
    },
    "courses" : [ 
        "js", 
        "mvc", 
        "signalR", 
        "expressjs"
    ]
})


// select * from instructors where firstName='noha'

db.instructors.find({
    firstName: "noha"
    })
    
    
// select firstName, lastName
    
db.instructors.find({} // condition
, {
    firstName:1,
    lastName:1
    
    } // projection

)

/// 

db.instructors.find({} // condition
, {
    firstName:1,
    lastName:1, 
    _id:0
    
    } // projection

)


/// 

    db.instructors.insertOne({
    "_id" : 17,
    "firstName" : "Mohamed",
    "age" : 21.0,
    "salary" : 3500.0,
    
})


db.instructors.find({} // condition
, {
    firstName:1,
    lastName:1, 
    _id:0
    
    } // projection

)



/// 
    db.instructors.find( {
    firstName:1,
    lastName:1, 
    _id:0
    
    } // projection

)











// 
    




















    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





























