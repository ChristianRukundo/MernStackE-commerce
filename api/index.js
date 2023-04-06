const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require('cors');
const mongoose =require('mongoose')
const dotenv = require('dotenv');
const UserRoutes = require('./routes/User');
const ProductRoutes = require('./routes/Product')
const CartRoutes = require('./routes/Cart')
const OrderRoutes = require('./routes/Orders');
const StripeRoute = require('./routes/stripe')
//Configuration  
dotenv.config({ 'path': '.env' });

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
//DataBase 
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected to Database sucessfully"))
    .catch((err) => console.log(err))


const PORT = process.env.PORT

const api = process.env.API;


app.get(`/${api}`, (req, res) => {
    res.send("Holla");
});


// app.use(authJwt)
app.use(`/${api}/users`, UserRoutes);
app.use(`/${api}/products`, ProductRoutes);
app.use(`/${api}/carts`, CartRoutes);
app.use(`/${api}/orders`, OrderRoutes);
app.use(`/${api}/checkout`, StripeRoute )

app.all('*', (req, res) => {
    res.status(404).json({
        succeess: false,
        messge: `The page you are looking for is not available ${req.originalUrl}`
    })
})


app.listen(PORT, ()=>console.log(`server running on http://localhost:${PORT}/${api}`))