const express = require('express');
const cors = require('cors');
const app = express();

var corOptions = {
    origin: 'http://localhost:8081'
};

// middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ urlencoded: true }));

// routes
const router = require('./routes/productRoutes');
app.use('/api/products', router);

// testing API
app.get('/', (req, res) => {
    res.json({ message: 'hello from API '});
});

// PORT
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => console.log('Up and running.'));