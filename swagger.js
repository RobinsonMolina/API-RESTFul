// Swagger

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerDefinition = {
    openapi : '3.0.0',
    info : {
        title : 'API-RESTFUL',
        version: '1.0.0',
        description:'API para gestionar empleados y departamentos en una empresa',
        license : {
            name: 'License Under MIT',
            url: 'https://spdx.org/licenses/MIT.html'
        },
        contact : {
            name: '',
            url: ''
        }
    },
    servers : [
        {
            url: 'http://localhost:3000',
            description: 'Server'
        }
    ]
}
const options = {
    swaggerDefinition,
    apis:['./routes/*.js'],
}
const swaggerSpec = swaggerJSDoc(options)
module.exports = swaggerSpec