// index.js
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const itemRoutes = require('./routes/itemRoutes');
const cors=require('cors')


const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.send('Helloworld');
});

app.use('/auth', authRoutes);
app.use('/', itemRoutes);

sequelize.sync().then(() => {
  console.log('Database synchronized');
}).catch((error) => {
  console.error('Error syncing the database:', error);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
