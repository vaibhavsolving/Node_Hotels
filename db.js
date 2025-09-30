const mongoose = require('mongoose');

//define the mongoBD connection URL
const mongoURL ='mongodb://localhost:27017/resturent'



/*


// Set up MongoDB connection
mongoose.connect(mongoURL);


//get the default connnection
//mongoose maintains a default connection object representign the mongoose
const db = mongoose.connection;     //db will interact with data...


// Define EVENT LISTENERS for database connections
db.on('connected', () => {
    console.log('Connected to mongoDB server');
})

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;  // we have to import that db to main file like server.js/main.js/note.js/index.js....  const db = require('./db'); ye line likhne hote h main file mai

*/



//      ****** MODERN way to connect mongobd to node
async function connectDB() {
  try {
    await mongoose.connect(mongoURL);
    console.log('Connected to MongoDB server');

    // handle process termination gracefully
    process.on('SIGINT', async () => {
      await mongoose.connection.close();
      console.log('MongoDB connection closed due to app termination');
      process.exit(0);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // exit if DB connection fails
  }
}
//have to import this db to main file
//syntex     module.exports = index;
module.exports = connectDB;

