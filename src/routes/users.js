const addUser = require('../controllers/users')

const User = {
    schema: {
        type: 'object',
        properties: {
            user_email: { type: 'string' },
            user_password: { type: 'string' }
        }
    }
}

const postUserOpts = {
    /**
    schema: {
        body: {
            type: 'object',
            required: ["user_email", 'user_password'],
            properties: {
                user_email: { type: 'string' },
                user_password: { type: 'string' }
            }
        },
        response: {
            201: User
        }
    },
    */
    handler: addUser
}

function userRoutes(fastify, options, done){
    // add user
    fastify.post('/users', postUserOpts)

    done()
}

module.exports = userRoutes