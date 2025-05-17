const express = require('express');
require ('dotenv').config();  
const app = express();
const port = process.env.PORT ;
require('./database/connection');

const categoryRoutes = require('./routes/categoryRoutes');
const userRoute = require('./routes/userRoutes')

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//middleware
app.use(express.json());

//routes
app.use('/api', require('./routes/categoryRoutes'));
app.use('/api', require('./routes/subcategoryRoutes'));
app.use('/api', require('./routes/userRoutes'))


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
}   );

