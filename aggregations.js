/// aggregation 


/// apply set of steps on data  --> reach specific target  


/// aggregate([{}, {}, {}])

//1- to apply aggregation

db.instructors.aggregate() // error 


db.instructors.aggregate([])  //  db.instructors.find()


// set of stages --> stage --> age = 21 

db.instructors.aggregate([

{
        $match:  {age:21}  // get document that satisfy specific codition
    
 } // stage 01 

])



///////// get instructors age =21 then sort firstname , lastname

db.instructors.insertOne(
 
 {
    "_id" : 27.0,
    "firstName" : "noha",
    "lastName" : "ahmed",
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
}
 
 )
db.instructors.aggregate([

{
        $match:  {age:21}  // get document that satisfy specific codition
    
 }, // stage 01 
 {
     
     $sort: {firstName:1 , lastName:-1}
     
  }

])

////////////// 3- return firstname, lastname, salary 
  
db.instructors.aggregate([

{
        $match:  {age:21, lastName:{$exists:true}}  // get document that satisfy specific codition
    
 }, // stage 01 
 {
     
     $sort: {firstName:1 , lastName:-1}
     
  }, /// stage 02
  {
      $project: {
          
          firstName:1, 
          lastName:1, 
          salary: 1
          }
      
   } // stage 03
  

])
 //// --> get fullname 
   firstName="Ahmed"
   lastName ="Ali"
 db.instructors.aggregate([

{
        $match:  {age:21, lastName:{$exists:true}}  // get document that satisfy specific codition
    
 }, // stage 01 
 {
     
     $sort: {firstName:1 , lastName:-1}
     
  }, /// stage 02
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
            
             salary:1 ,
              firstName:1 , 
              netsalary: {$multiply : ["$salary",.8 ]}
              
           }
  
   } // stage 03
  

])  
   
 //// Save the output to another collection 
   
 db.instructors.aggregate([{
        $match:  {age:21, lastName:{$exists:true}}  // get document that satisfy specific codition
 }, // stage 01 
 { 
     $sort: {firstName:1 , lastName:-1}
  }, /// stage 02
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              netsalary: {$multiply : ["$salary",.8 ]} , 
           // _id:0 // don't do this 
           }
   } , // stage 03
  {
        $out: "instructors_info"
      
   }

])  
   
   
   
 db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 

  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              netsalary: {$multiply : ["$salary",.8 ]} , 
           // _id:0 // don't do this 
           }
   }  // stage 03


])   
   
   // get insturctors with the same address
   
    db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 

  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              netsalary: {$multiply : ["$salary",.8 ]} , 
           
              address:1
              }
   },  // stage 02
    {
        
        $group : {_id: "$address",
            
            total_instructors: {$sum: 1}
            }     
     }

]) 
 
   
 // get instructors with the same age 
 db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              salary: 1,
              address:1,
              age: 1
              }
   },  // stage 02
    {
        $group : 
            {
                _id: "$age",
                inst_with_same_age: {$sum: 1}
            }     
     }

])  
  // get instructors with the same age and 
     // their total salaries
 db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              salary: 1,
              address:1,
              age: 1
              }
   },  // stage 02
    {
        $group : 
            {
                _id: "$age",
                inst_with_same_age: {$sum: 1}, 
                total_salaries : {$sum: "$salary"},
                min_salary : {$min: "$salary"}, 
                max_salary: {$max:"$salary"}, 
                avg_salary: {$avg: "$salary"}
            }     
     }

])     
     
     
     
     
     
 /// get insturctors with same age and lives in same city 
  db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              salary: 1,
              address:1,
              age: 1
              }
   },  // stage 02
    {
        $group : 
            {
        _id: {"age": "$age", "city": "$address.city"},
                inst_with_same_age: {$sum: 1},
                total_salaries : {$sum: "$salary"},
                min_salary : {$min: "$salary"}, 
                max_salary: {$max:"$salary"}, 
                avg_salary: {$avg: "$salary"}
            }     
     }

])      
     
     
    /// grouping result 
    // age:21 , totalsalary : 000 , city : name 
    db.instructors.aggregate([{
        $match:  {lastName:{$exists:true}, 
        address: {$exists:true}
        }  // get document that satisfy specific codition
 }, // stage 01 
  {
      $project: {
          fullname: {$concat: ["$firstName", " ", 
              "$lastName"]}, 
              salary: 1,
              address:1,
              age: 1
              }
   },  // stage 02
    {
     $group : {
        _id: {"age": "$age", "city": "$address.city"},
                inst_with_same_age: {$sum: 1},
                total_salaries : {$sum: "$salary"},
               
            }     
     }
            , {
         
         $project:{
             
             age: "$_id.age" , 
             city: "$_id.city", 
             total_salaries: "$total_salaries", 
             count: "$inst_with_same_age",
             _id: 0
             
             }
         
         }

])      
     
     
     
     
     
  //////  lookups 
      
      /// get student // and its department 
      
 db.students.aggregate([
         {
             $match: {department:{$exists: true}}
          }, 
          {
              $project: {
                  firstName:1 ,   lastName:1, department: 1      
                  }   
           }, 
           {
               
             $lookup: {
                 from: "departments", // collection I need info from 
                 localField: "department", 
                 foreignField: "_id", 
                 as : "dept_info"
                 
                 }  
            }
            , 
            {
                $project: {
                    
                    firstName: 1, 
                    lastName:1 , 
                    dept_name : "$dept_info.name", 
                    d_name : {$arrayElemAt: ["$dept_info", 0]}
                    
                    }
                
                }, {
                    
                    $project: {
             firstName: 1,  lastName:1 , dept_name : "$d_name.name"
                    
                    }
                    
                    
                    }
                
 
         ])   
     
     
                    
                    /// why lookup returns with array 
                    
                    
  db.students.aggregate([
         {
             $match: {subjects:{$exists: true}}
          }, 
          {
              $project: {
                  firstName:1 ,   lastName:1, subjects: 1      
                  }   
           }, 
           {
               
             $lookup: {
                 from: "subjects", // collection I need info from 
                 localField: "subjects", 
                 foreignField: "_id", 
                 as : "subjects_info"
                 
                 }  
            }, {
                
                $project: {firstName:1 , subjects_info: "$subjects_info"}
                
                
                }

                
 
         ])   
     
                       
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
     
     
     
     
     
     
     
     
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
 







 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
























































