const { v4:uuidv4 } = require('uuid')
let items = require('../data/Items')

const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply) => {
    const {id} = req.params
    
    const item = items.find((item) => item.id === id)
    
    reply.send(item)
}

const addItem = (req, reply) => {
    const {name} = req.body
    const item = {
        id: uuidv4(),
        name
    }

    items = [...items, item]

    reply.code(201).send(JSON.stringify(items))
}

module.exports = {
    getItem,
    getItems,
    addItem
}