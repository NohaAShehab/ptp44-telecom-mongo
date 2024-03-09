
/// update documents in mongodb 

db.instructors.find()

db.instructors.findOne()



/// updateMany .. updateOne  --






//// ---> update operators 
// update instructors set firstName='Noha', lastName='Shehab' where _id=6

// 1- update existing fields in the document 
db.instructors.updateOne(

    {
        _id: 6
     } // update condition
    , 
    {
        $set: {firstName:"Noha", lastName: "Shehab"}
        
    } /// update operation 
)

// 2- add email property to the document ? 
    
    db.instructors.updateOne(

    {
        _id: 6
     } // update condition
    , 
    {
        $set: {email: "n@gmail.com"}
        
    } /// update operation 
)
     
    //********************************* upsert operation ************************************
    //// 
    
    db.instructors.updateOne({
        
        _id:101
        
        }, {
            
            $set: {
                email:"m@gmail.com", salary:1000
                
                }
            
            })
    
    
    /// if the document not exists ---> insert it  --->  upsert 
      
        db.instructors.updateOne({
        
        _id:101
        
        } // condition
        , {
            $set: {
                email:"m@gmail.com", salary:1000
                
                }
            } // update operation 
            
          , {
                upsert: true
              
              }   /// update options
            
            
            )          
            
            
            
   ///************************************ rename fieldname **********************************************         
            
            db.instructors.updateOne(
              {_id:6}, 
              {
                    $rename:{email: "instructorEmail"}
                  
               }
              )
            
               
 ////******************************** remove field from document**********
            
     db.instructors.updateOne(
              {_id:6}, 
              {
                    $unset:{instructorEmail:0 }
                  
               }
              )          
               
               
    ////******************************************* update embedded object ****************************
               
 db.instructors.updateOne(
               {_id:6} // condition
               
               , {
                   
                    $set: {   "address.city": "mansoura"}
                   
                  } // operation
                
               
               
               )              
               
   //// ******************************* increment salary ? *************************
                  
                  
                  
   db.instructors.updateOne(
                  
                  { _id: 6}, 
                  
                  {
                      
                      $inc: {salary:-1000}
                      
                      }
                  
                  )               
                  
                  
    
           db.instructors.updateOne(
                  
                  { _id: 6}, 
                  
                  {
                      
                      $mul: {salary:3}
                      
                      }
                  
                  )                    
                  
                  
                  
                  
                  
    ////************************Array operators *************************************              
                  
                  
      /// search mvc in course  -- replace it with django
          // I don't know the exact poisiton of the element in the array
                      
      db.instructors.updateOne(
                      
                      {_id:6, courses:"mvc"},
                      {
                          
                          $set: {"courses.$": "django"}
                          
                       }
                      
                      
                      )            
                  
                       
        db.instructors.updateOne({_id:6}, 
        {
            
            
            $set: {"courses.0": "javascript"}
            
            })
                       
                       
                       
                       
       /// add course laravel to the courses array 
            
            
            db.instructors.updateOne({_id:6}, 
            {
                
               $push : {"courses":"laravel"}
                
                
                
            })
            
            
            /// if value doesn't exists  --> then add it to the array 
            
               db.instructors.updateOne({_id:6}, 
            {
                
               $addToSet : {"courses":"laravel"}
                
                
                
            })
            
            
               db.instructors.updateOne({_id:6}, 
            {
                
               $addToSet : {"courses":"flask"}
                
                
                
            })
            
            ////  add these courses to the array ['odoo', 'python']
         
            
           db.instructors.updateOne(
            
            {_id:6}, 
            {
                $push: {courses: ["abc", "dff"]}
                
             }
            
            )
            
            
               db.instructors.updateOne(
            
            {_id:6}, 
            {
                $push: {courses:{$each:["abc", "dff"]}}
                
             }
            
            )
            
             
             
       //// remove element from array 
       
       
       
       
       db.instructors.updateOne({_id:6}, 
       
       
       {
           
        $pop : {courses:1}   
           
           
        })      
             
             
           
      
          
       db.instructors.updateOne({_id:6}, 
       
       
       {
           
        $pop : {courses:3}   
           
           
        })       
             
             
             
            
       db.instructors.updateOne({_id:6}, 
       
       
       {
           
        $pop : {courses:-1}   
           
           
        })          
            
       /// remove speicific element 
       
            
       db.instructors.updateOne({_id:6}, 
       
       
       {
           
        $pull : {courses:"laravel"}   
           
           
        })     
       
       
        
        ////////////////////////////////////////////////////////
        
        db.instructors.deleteOne({_id:7})
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
      
     
     
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
             
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                       
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  
   
   
   
   
   
   
   
   
   
   
   
   
   








   
               
               
               
               
               
               
               
               
               
               
               
               
               
               
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    





































