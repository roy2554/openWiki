const bcrypt = require('bcrypt')

const generateNewApiToken = async (userId: string) => {
    const userApiToken = await bcrypt.hash("HOW GREat"+userId+"UserId", 10)
    if (!userApiToken) return [false, 'err']
    return [true, userApiToken]
}

module.exports = generateNewApiToken

export {}