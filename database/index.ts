const mongoose = require('mongoose')
const databaseConfig = require('./database-config')

mongoose
.connect(databaseConfig.connect.key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("[DATABASE] CONNECTED SUCCESSFULLY")
})
.catch((err: any) => {
    console.log("[DATABASE] AN ERROR OCCURRED :\n", err)
})

export {}