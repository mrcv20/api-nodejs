const express = require('express')


const app = express();


// para entender quando eu envia informaçoes para api em json
app.use(express.json())
// para entender quando passar parametros via urls e decodificar 
app.use(express.urlencoded({ extended: false }))


// req = dados da requests (param, token)
// res = object to response for the user when him access this route
// referenced
require('./controllers/authController')(app)
require('./controllers/projController')(app)



app.listen(3000)