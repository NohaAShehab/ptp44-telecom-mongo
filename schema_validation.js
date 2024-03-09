/// schema validation 

/// add rules  to the inserted / updated data 

/***************
    1- fields required 
    2- fields with specific datatypes
    3- fields --> specific values --> gender (m, f)

***********/

/// **** schema validation 

/// check schema validation rules on instructors 

db.getCollectionInfos({name:"instructors"})

//// 1- add schema validation while creating collection 



db.createCollection("employees", 
{   
    validator: {
 
        $jsonSchema: {
            bsonType:"object",
            // define optional properties ()
            properties: {
                firstName:{bsonType: "string"}, 
                lastName: {bsonType: "string"}
                
                }
            }  /// jsonschema validator options
        }// validator properties 

}// creation options 
)

db.employees.insertOne({_id:1})
db.employees.insertOne({firstName:"ahmed"})

db.employees.insertOne({firstName:10})


/// modify collection schema 

db.getCollectionInfos({name: "employees"})




db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)



/// add age field 
    
    
 


db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            properties: {
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                age: {bsonType: "number"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)

db.employees.insertOne({firstName:"ahmed", age:"10"})
db.employees.insertOne({firstName:"ahmed", age:10})

//// ***** add required field

/// firstName , lastName , email 

db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["firstName", "lastName", "email"],
            properties: {
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                age: {bsonType: "number"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)

db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:10,
    age:10})
    
    
/// close adding extra properties 
    
    
    db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:10,
    age:10, city:"cairo"})
    
    
    db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"],
            properties: {
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                age: {bsonType: "number"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)
    
     
    db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:10,
    age:10})
    
    
    
    
    
    
  // if you need to prevent adding additional properties
  // you must ---> specify id 
  
     
db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"],
            properties: {
                _id: {} ,// ask mongo to add object_id
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                age: {bsonType: "number"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)  
    
    
       db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:10,
    age:10})
     
   ///// 
   db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"],
            properties: {
                _id: {} ,// ask mongo to add object_id
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                age: {bsonType: "number"}, 
                email : {bsonType: "string"}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)   
    
    
         db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:"10",
    age:10})
    
    


/// condition on age ? ---> age > 10 and age < 60


   db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"],
            properties: {
                _id: {} ,// ask mongo to add object_id
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                email : {bsonType: "string"}, 
                age: {bsonType: "number", 
                    minimum:10, maximum:60
                    
                    }
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)   
   

     db.employees.insertOne({firstName:"ahmed",
   
   lastName: "ahmed", email:"10",
    age:5})


//// _id ---> number



   db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"],
            properties: {
                _id: {
                    bsonType: "number"
                    
                    } ,// ask mongo to add object_id
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                email : {bsonType: "string"}, 
                age: {bsonType: "number", 
                    minimum:10, maximum:60
                    
                    }
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)  




    db.employees.insertOne({_id:20 ,firstName:"ahmed",
   
   lastName: "ahmed", email:"10",
    age:50})


/// gender ---> female , male 
    
    
   db.employees.runCommand("collMod", 
{
    validator: {
        $jsonSchema: {
            bsonType: "object",
            additionalProperties: false,
            required: ["firstName", "lastName", "email"
            ],
            properties: {
                _id: {
                    bsonType: "number"
                    
                    } ,// ask mongo to add object_id
                firstName: {bsonType:"string"},
                lastName: {bsonType:"string"}, 
                email : {bsonType: "string"}, 
                age: {bsonType: "number", 
                    minimum:10, maximum:60
                    
                    }, 
                    
                 gender : {enum: ["male", "female"]}
                
                }
            
            }// end of jsonSchema
        
        }// end of validator
    }

)  

     db.employees.insertOne({_id:21 ,firstName:"ahmed",
   
   lastName: "ahmed", email:"10",
    age:50, gender: "male"})
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    








   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






































































//// 2- add schema validation rules after creating collection


