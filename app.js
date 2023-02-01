import express, { json } from "express"
import { home, registerAdmin, registerCustomer, registerSeller,login, logout, products, getuser, deleteUser, updateProfile } from './routes'
import checkCurrentUser from "./middlewares/checkCurrentUser"
import cors from 'cors'
import path from "path"


const app = express()
app.use(json())
app.use(cors())

app.use('/', home)
app.use('/admin', registerAdmin)
app.use('/registercustomer', registerCustomer)
app.use('/registerseller', registerSeller)
app.use('/login', login)
app.use('/logout', logout)
app.use('/products', products)
app.use('/getuser', getuser)
app.use('/deleteuser', deleteUser)
app.use('/updateProfile', updateProfile)


app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

// middleware
// app.use(checkCurrentUser)
export default app