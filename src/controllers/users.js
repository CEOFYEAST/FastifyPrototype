let users = require('../data/Users')

const addUser = (req, reply) => {
    const { user_email, user_password } = req.body

    const user = {
        user_email,
        user_password
    }

    users = [...users, user]

    reply.code(201).send(user)
}

module.exports = addUser