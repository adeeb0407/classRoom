import express from 'express'
import cors from 'cors'
import scheduleRoutes from './routes/schedule.js'
import db from './config/config.js'
import session from 'express-session'

const app = express()

app.use(cors())
app.use(express.json({limit : "30mb", extended : true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))

db.connect((err) => {
    if(err) console.log(err);
    console.log(`MYSQL Database connected`);
})

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
//Routes
//User
app.use('/', scheduleRoutes)


app.use('/', (req, res) => {
    res.send('Class Room schedule')
})

app.listen(5000, () =>{
    console.log(`Server is running on PORT 5000`);
} )