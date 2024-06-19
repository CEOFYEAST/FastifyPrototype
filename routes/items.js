const items = require('../Items')

const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: function (req, reply) {
        reply.send(items)
    }
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: function (req, reply) {
        const {id} = req.params
    
        const item = items.find((item) => item.id === id)
    
        reply.send(item)
    }
}

function itemRoutes(fastify, options, done){
    // get all items
    fastify.get('/items', getItemsOpts)
    
    // get single item
    fastify.get('/items/:id', getItemOpts)

    done()
}

module.exports = itemRoutes