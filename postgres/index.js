const {Client} = require('pg')

const express = require('express')
const app = express()


const client = new Client({
    user: 'postgres', // default user
    host: '0.0.0.0', //  container port
    database: 'postgres',
    password: 'mysecret',
    port: 5432,
})

client.connect()
    .then(() => {console.log('connected')})
    .catch((err) => {console.error('Error connecting to Database',err)})



app.get('/data', (req,res) => {

    // const queryUsers = `SELECT * FROM users;`

    client.query(query)
    .then(result => { console.log('Query Result',result) })
    .catch(err => { console.error('Query Error',err) })
    .finally(() => {
        client.end()
        .then(() => {console.log('disconnected')})
        .catch(err => {console.error('Error disconnecting from Database',err) })
})

})

