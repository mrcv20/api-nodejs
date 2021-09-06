const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'
const endpointsFiles = ['./src/app/controllers/authController.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})