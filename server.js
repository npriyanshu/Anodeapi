import {app} from './app.js'
import { dbconnect } from "./data/database.js"; // <-- database function

dbconnect() // <-- connecting the database


// now server.js is main file because app.listen is here so we have to run it 

app.listen(process.env.PORT, // <--  giving port through env file
    ()=>{
    console.log('server is working ')
})