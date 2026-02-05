require('dotenv').config();
const mongoose = require('mongoose');
// ... other imports ...

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch(err => console.error(err));