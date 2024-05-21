const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(express.static("public"));

// Database connection
const db = require('./config/db');

// Middleware for file uploads
const multerMiddleware = require('./middlewares/multer');

// Routes
const productRoutes = require('./routes/productRoutes');
const moduleRoutes = require('./routes/moduleRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const emailRoutes = require('./routes/emailRoutes');
const accountRoutes = require('./routes/accountRoutes');
const adminRoutes = require('./routes/adminRoutes');
const billingRoutes = require('./routes/billingRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const groupRoutes = require('./routes/groupRoutes');
const productDetailsRoutes = require('./routes/productDetailsRoutes');
const registerRoutes = require('./routes/registerRoutes');
const statusRoutes = require('./routes/statusRoutes');

app.use(productRoutes);
app.use( moduleRoutes);
app.use(userRoutes);
app.use(authRoutes);
app.use(accountRoutes);
app.use(adminRoutes);
app.use(billingRoutes);
app.use(employeeRoutes);
app.use(groupRoutes)
app.use(productDetailsRoutes)
app.use(registerRoutes)
app.use(statusRoutes)



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
