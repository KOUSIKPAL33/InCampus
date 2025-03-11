const mongoose = require('mongoose');
require('dotenv').config();
const mongourl = process.env.MONGO_URL;
const connectToMongo = async () => {
    try {
        await mongoose.connect(mongourl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB successfully");

        // ======================== yummpy Data ====================
        const fetchedData_yummpy = await mongoose.connection.db.collection("yummpy").find({}).toArray();
        const foodCategory_yummpy = await mongoose.connection.db.collection("category_yummpy").find({}).toArray();
        
        global.food_items_yummpy = fetchedData_yummpy;
        global.foodCategory_yummpy = foodCategory_yummpy;

        // ======================== kathi Data ====================

        const fetchedData_kathi= await mongoose.connection.db.collection("kathijunction").find({}).toArray();
        const foodCategory_kathi = await mongoose.connection.db.collection("category_kathijunction").find({}).toArray();
        
        global.food_items_kathi = fetchedData_kathi;
        global.foodCategory_kathi = foodCategory_kathi;

        // ======================== dominos Data ====================
        const fetchedData_dominos= await mongoose.connection.db.collection("dominos").find({}).toArray();
        const foodCategory_dominos = await mongoose.connection.db.collection("category_dominos").find({}).toArray();
        
        global.food_items_dominos = fetchedData_dominos;
        global.foodCategory_dominos = foodCategory_dominos;
        

    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = connectToMongo;
