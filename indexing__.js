///  indexs 

db.instructors.find({ firstName: "noha" })

// to display query statiscs 

db.instructors.find({ firstName: "noha" }).explain("executionStats")



db.instructors.createIndex({ firstName: 1 })



db.instructors.find({ firstName: "noha" }).explain("executionStats")


db.instructors.getIndexes()

db.instructors.dropIndex("firstName_1")



