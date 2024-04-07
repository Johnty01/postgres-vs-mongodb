const {Client} = require('pg')

const express = require('express')
const app = express()


const client = new Client({
    user: 'postgres', // default user
    host: '0.0.0.0', //  container port
    database: 'performance',
    password: 'mysecret',
    port: 5432,
})

client.connect()
    .then(() => {console.log('connected')})
    .catch((err) => {console.error('Error connecting to Database',err)})



app.get('/data', (req,res) => {

    const queryAll = `SELECT * FROM test_one;`
    const querySelfJoin = `SELECT t1.*, t2.* FROM test_one t1 JOIN test_one t2 ON t1.sequence = t2.sequence;`
    const querySelfConditionalJoin = `SELECT t1.*, t2.* FROM test_one t1 LEFT JOIN test_one t2
                                                    ON t1.sequence = t2.sequence
                                                    WHERE t2.sequence > t1.sequence;`

    client.query(querySelfConditionalJoin)
    .then(result => { console.log('Query Result') })
    .catch(err => { console.error('Query Error',err) })
    .finally(() => {
        client.end()
        .then(() => {console.log('disconnected')})
        .catch(err => {console.error('Error disconnecting from Database',err) })
})

})

app.listen(8240, () => {console.log('Listening on port 8240')})

