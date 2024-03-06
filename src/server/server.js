const express = require('express')
const path = require('path')


const startServer = (options) => {
    const { port, public_path = 'public'} = options
     const app = express()
     //para poder usar middlwares se usa la palabra use
     app.use(express.static(public_path))

     app.get('*', (req, res) => {
     const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
     res.sendFile(indexPath)
    
    })

    app.listen(port, () => {
      console.log(`Escuchando el puerto ${port}`)
    })
    }

module.exports = {
    startServer
}