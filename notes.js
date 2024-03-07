/***
 * 
 * 
 * to start mongo service 
 * 
 * open terminal// cmd >> mongod
 *                  >> mongod --dbpath <path we want to save data in >  --port <portnumber>
 * 
 * 
 * to start client interface 
 *  >> mongosh 
 *      >> open connection to the mongodb --> use default db --> test 
 * 
 * >> to list database
 * show databases;
 * show dbs 
 * 
 * // mongo didn't create empty database
 * 
 * // to create new database
 * use telecom44;
 * 
 */

// create collection students ==> student(Abdelrahman, 24, PorstSaid)

db.students.insertOne({name:"abdulrahman", age:24, city:"PortSaid"})  // insert new object

// to list all documents in the collection 
db.students.find()


db.students.insertOne({firstName:"Asmaa", lastName:"Mohamed", grade:"verygood"})
