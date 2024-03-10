db.getCollection('product').find({}).count()


db.product.find({ brand_name: "Denny" }).explain("executionStats")


db.product.createIndex({ brand_name: 1 })