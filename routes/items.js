const {getItems, getItem} = require('../controllers/items')

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
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}

function itemRoutes(fastify, options, done){
    // get all items
    fastify.get('/items', getItemsOpts)
    
    // get single item
    fastify.get('/items/:id', getItemOpts)

    done()
}

module.exports = itemRoutes