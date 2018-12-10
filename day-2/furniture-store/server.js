const express = require('express')
const path = require('path')
const app = express()




const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

app.get('/', function (request, response) {
    response.send(console.log(`Running server on port ${port}`))
})

app.get('/priceCheck/:name', function(request, response){
    let name = request.params.name
    let find = store.find(s => name == s.name)
    let price = {}
    find == undefined ? price = {price : null} : 
    price = {
        price : find.price
    }
    response.send(price)
})

app.get('/buy/:name', function(request, response){
    let name = request.params.name
    store.map(s => name == s.name ? s.inventory-- : null)
    response.send(store.find(s => name == s.name))
})

app.get('/sale/:admin', function(request, response){
    let admin = request.params.admin
    admin ? store.map(s => s.inventory > 10 ? s.price /=2 : null) : null
    response.send(store)
})