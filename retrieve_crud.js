// data retrieval in mongo 

db.instructors.find()

db.instructors.find({})

db.instructors.find().constructor.name  // cursor , DBQuery

db.instructors.find().forEach((document)=> {
    
    print(document)
    })
    
arr = [4,3,5]
    
arr.forEach((elem)=> {print(elem*2)})


db.instructors.find().toArray().constructor.name

db.instructors.find().forEach((document)=> {
        print(`${document.firstName}  ${document.lastName}`)
    })

db.instructors.find().toArray().forEach((document)=> {
        print(`${document.firstName}  ${document.lastName}`)
    })



/////////**************** find operators *************************///
   db.instructors.findOne() // return first document
    
    
    /// select * from instructors where age = 21 
    
    db.instructors.find({age:21})
    
    
  
    /// select * from instructors where age > 21 
    
    db.instructors.find(
    {age:{$gt: 21}}
    
    )
    
    
    ///  salary = 3600
    db.instructors.find({salary:3600})
    
    db.instructors.find({salary: {$eq:3600}})
    
    
    
    /// get age 21 or 22 ? 
    
    db.instructors.find({
            age: {$in: [21, 31]}
        })
    
    
    // select * from instructors where age = 21 or age= 31
    
        
      ///****************************Or operator**************
        
       // *** top level operator 
        db.instructors.find(
        {
            
            $or: [{age:21}, {age:31}, {salary:3500}]
        })
        
        // ---> and 
        // firstName:"noha" , age = 31
        
        
      db.instructors.find({
          $and: [
            {firstName:"noha"},
            {age: 21}
          
          ]
          
          })  
        
        
        //////////////////////////////////////////////////
          
          ///********** get data from embedded object******** 
   
    db.instructors.find({
        "address.city": "cairo"
        
        })
        
       
        
        db.instructors.find({
            
            "address.street": {$in:[10 ,20]}
            
            })
          
          
            
     ///******************************* get data from array ? ******************************************************
      //****************************** ARRAY Operarors ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^    
          
          db.instructors.find({
              
              courses: "mvc"  // mongo assume that you need to 
              // find the document with courses property --> Array
              // return with documents contians mvc in its courses array 
              
              })
              
              
              
       /// get instructor teaches js and mvc 
              
db.instructors.find({
    
  courses : ["js" , "mcv"]  // exact match courses:["js", "mvc"]
    
    })              
    
    /// courses contains js and mvc
    
    
    
                
db.instructors.find({
    
  courses : {$all : ["js", "mvc"]}   // exact match courses:["js", "mvc"]
    
    })               
              
              
            
  
  /// instructor teaches js or mvc ?  
              
   db.instructors.find({
    
  courses : {$in : ["js", "mvc"]}   // exact match courses:["js", "mvc"]
    
    })   
    
    
    /// instructors  --> teaches only 3 courses 
    
    db.instructors.find({
        
        courses: {$size:3}
        
        })
    
    
    
    
//     db.instructors.find().forEach(document=> {
//         
//         print(`${document.firstName}   ${document.courses.length}`)
//         
//         })
        
        
   /////******************************
   
   db.students.insertOne({
       _id:11, 
       name: "ahmed",
       subjects : [3,4,5,12]
       
       
       })     
        
        
       
       /// get students  ---> have subjects --> id  > 4  and id < 13
        
        
        
        db.students.find(
       
        {
            
            subjects: {$elemMatch: {$gt:4, $lt:13}}
            }
       
       )
        
        
        db.instructors.find({
            
            courses: {$elemMatch: {$eq:"js", $eq:"mvc"}}
            
            })
        
       
               db.instructors.find({
            
            courses:  {$all : ["js", "mvc"]} 
            
            }) 
        
            
            
            
            
            
            
        
            
            
            
  /// ***************************** Element operator***************************************          
            
        summ = 0    
        
    db.instructors.find().forEach((document)=> {
        
        
        summ += document.salary
        
        
        })    
            
           print(summ)
            
            
            
        /// I need the sum of salaries for documents that have salary property 
        
             summ = 0    
        
    db.instructors.find(
       {
           
            salary: {$exists: true}
        }
        
        ).forEach((document)=> {
        
        
        summ += document.salary
        
        
        })    
            
           print(summ)
               
      
        
     
        
        
        
        
     /// 
     
     db.instructors.insertOne({
         
         _id:200, 
         name: "Mohamed", 
         salary: "threethousands"
         
         })   
         
         
        
      summ = 0    
        
    db.instructors.find(
       {
           
            salary: {$exists: true}
        }
        
        ).forEach((document)=> {
        
        
        summ += document.salary
        
        
        })    
            
           print(summ)      
         
        
        
 //  I need to check the type of field 
 
 
   summ = 0    
        
    db.instructors.find(
       {
           
            salary: {$type: "number"}
        }, {
            salary:1 , _id:0
            
            }
        
        ).forEach((document)=> {
        
        
        summ += document.salary
        
        
        })    
            
           print(summ)         
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    










