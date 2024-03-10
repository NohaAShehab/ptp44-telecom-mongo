// relationships
// data --> save --> in meaning related to other collections 



// one to one  ---> merge tables in one table 
// implement in mongo ? 
// implement in mongo using embedded objects 



///2- ***************** One to many ***********************************

//  students: {_id , name, email }                  track: {_id , name , location }

// using sql approach
//  students: {_id , name, email, track:track_id}       || track: {_id , name , location }
// adv.  data size --> small  ||| disadvantage --> get full student data --> response time high 
/// get track info with students studies --> response time high 


// 1- option one 
//students: {_id , name, email, track:{}}   adv. ==>get student info --> faster 
// disdva --> size of data ---> update // track_info // 
// get track info with its students ==> time consuming process 



//2- option two 
/// track: {_id , name , location, students: [] } /// document size very large 

// 3- option three 
//students: {_id , name, email, track:{_id , name }}  // track: {_id , name , location, courses, job profiles }


// option four

//students: {_id , name, email} 
// track: {_id , name , location, courses, job profiles, students: [{_id , name} , {_id ,name }] }


/// many to many  (students , subjects )

// 1- students: {_id ,name}  , subjects: {_id ,name} , std_sub: {sub_id , std_id , score }
/// 

// 2- students: {_id ,name, subjects: [_id, _id]} ...  subjects: {_id ,name} 


// 3- students: {_id ,name}   ...  subjects: {_id ,name, students: [_id , _id , _id ]} 

// 4- students: {_id ,name, subjects: [{}, {} ]}  /// size .. edit delete 

// 5- subjects: {_id ,name, students: [{}, {}, {}]} 

// 6- students: {_id ,name, subjects: [{_id , name}, {_id ,name} ]} ... 
//subjects: {_id ,name, students: [{_id , name}, {_id , name }, {}]} 



///// No relationships in Mongo ---> (business needs !! )

///******************* prepare 
/// create departments collection 
let departments = [
    { "_id": 1, "name": "opensource", "location": "3rdfloor", "phone": 12345 },

    { "_id": 2, "name": "sd", "location": "2ndfloor", "phone": 12345 },
    { "_id": 3, "name": "ai", "location": "1stfloor", "phone": 12345 },

    { "_id": 4, "name": "cloud", "location": "3rdfloor", "phone": 12345 },
    { "_id": 5, "name": "graphics", "location": "3rdfloor", "phone": 12345 },

]


db.departments.insertMany(departments)


/// create students collection 
let students = [

    {
        "_id": 1, "firstName": "Ahmed",
        "lastName": "Ali",
        "addresses": [
            { "city": "mansoura", "street": 10 },
            { "city": "cairo", "street": 20 }],

        "department": 0,
        "subjects": [1, 2, 5]

    },


    {
        "_id": 2, "firstName": "Mohamed",
        "lastName": "Ali",
        "addresses": [
            { "city": "alex", "street": 10 },
            { "city": "cairo", "street": 30 }],

        "department": 2,
        "subjects": [3, 2, 5]

    },

    {
        "_id": 3, "firstName": "Omar",
        "lastName": "Ahmed",
        "addresses": [
            { "city": "mansoura", "street": 100 }],
        "department": 2,
        "subjects": [3, 2, 5]

    },

    {
        "_id": 4, "firstName": "Mohamed",
        "lastName": "Ahmed",
        "addresses": [
            { "city": "Assuit", "street": 100 }],
        "department": 2,
        "subjects": [3, 4, 5]

    }

]

db.students.insertMany(students)



// subjects
let subjects = [

    { _id: 1, "name": "js", "maxgrade": 100 },
    { _id: 2, "name": "mongo", "maxgrade": 100 },
    { _id: 3, "name": "jenkins", "maxgrade": 100 },
    { _id: 4, "name": "gcp", "maxgrade": 100 },
    { _id: 5, "name": "aws", "maxgrade": 100 },
    { _id: 6, "name": "terraform", "maxgrade": 100 },
    { _id: 7, "name": "microservice", "maxgrade": 100 },
    { _id: 8, "name": "admin", "maxgrade": 100 },

]


db.subjects.insertMany(subjects)


/// 1- display student info 

db.students.find()


/// display students and his department ??? 
db.students.find({ department: { $exists: true } })
    .forEach((document => {

        //     print(document)

        dept = db.departments.find({ _id: document.department }).toArray()
        if (dept.length === 1) {
            print(`${document.firstName}  ${document.department}, ${dept[0].name}`)
        }
        else {
            print(`${document.firstName} ${document.department}, department not found`)

        }

    }))

/// enhancement for the query 
db.students.find({ department: { $exists: true } },
    { firstName: 1, department: 1 }
) // projection 
    .forEach((document => {

        //     print(document)

        dept = db.departments.find({ _id: document.department }).toArray()
        if (dept.length === 1) {
            print(`${document.firstName}  ${document.department}, ${dept[0].name}`)
        }
        else {
            print(`${document.firstName} ${document.department}, department not found`)

        }

    }))


/// another enhancement ? 

// 1- get departments 

alldepts = db.departments.find().toArray()
print(alldepts)


db.students.find(
    { department: { $exists: true } },

    { department: 1, firstName: 1 }

).forEach((document) => {

    print(`${document.firstName} ${document.department}`)
    /// get dept info ? 

})



/////////////////////////////////////////


alldepts = db.departments.find().toArray()
//     print(alldepts)


db.students.find(
    { department: { $exists: true } },

    { department: 1, firstName: 1 }

).forEach((document) => {
    /// get dept info ? 
    dept_info = alldepts.filter(
        (elem) => elem._id === document.department)
    // filter return with arrray 

    if (dept_info.length === 1) {
        //             print(dept_info[0].name)
        dept_name = dept_info[0].name
        print(`${document.firstName}: ${dept_name}`)
    }
    else {
        print(`${document.firstName} : dept not found `)

    }

})



/// get students and subjects he studies ?

// mysubjects=  db.subjects.find().toArray()
// 
// 
// db.students.find(
//         {subjects:{$exists:true}, firstName: {$exists:true}}, 
//         {firstName:1 , subjects:1}
//      
//       ).forEach((document)=> {
// //           print(document.subjects)
//           
//           subjects_names = ''
//           // loop over subjects ==> to subject names 
//           
//           for (subj in document.subjects){
//               
//             print(subj)
//                 
//                mysub = mysubjects.filter((elem)=>elem._id==subj)
// //               print(mysub)
//               
//               if(mysub.length ===1){
//                   subjects_names += mysub[0].name + " "
//                   
//                   }
// //               
//               }
//               
//               print(` ${document._id } : ${document.firstName} studies ${subjects_names}`)
// 
//           })       


//         mysubjects=  db.subjects.find().toArray()  
//           mysub = mysubjects.filter((elem)=>elem._id===2)
//           print(mysub)








allsubjects = db.subjects.find().toArray()


db.students.find(
    { subjects: { $exists: true }, firstName: { $exists: true } },
    {
        firstName: 1, subjects: 1
    }).forEach((document) => {

        std_subjects = document.subjects

        subjects_names = ''

        for (subj of std_subjects) {
            mysub = mysubjects.filter((elem) => elem._id == subj)
            if (mysub.length === 1) {
                subjects_names += mysub[0].name + " "

            }
            //               
        }


        print(` ${document._id} : ${document.firstName} studies ${subjects_names}`)



    })



















































































































































