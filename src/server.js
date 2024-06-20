const fastify = require('fastify')({logger: true})
fastify.register(require('@fastify/swagger'), {})
fastify.register(require('@fastify/swagger-ui'), {
    routePrefix: '/docs',
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false
    },
    uiHooks: {
        onRequest: function (request, reply, next) { next() },
        preHandler: function (request, reply, next) { next() }
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
    transformSpecificationClone: true
})
fastify.register(require('./routes/items.js'))


const PORT = 5000

const start = async () => {
    try {
        await fastify.listen({ port: PORT })
    } catch(error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()