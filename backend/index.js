const express = require('express');
require ('dotenv').config();  
require('./database/connection');
const morgan = require('morgan')

const categoryRoutes = require('./routes/categoryRoutes');
const userRoute = require('./routes/userRoutes')


const app = express();
const port = process.env.PORT ;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//middleware
app.use(express.json());
app.use(morgan('dev'))

//routes
app.use(categoryRoutes);
app.use('/api', require('./routes/subcategoryRoutes'));
app.use(userRoute)

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
}   );

