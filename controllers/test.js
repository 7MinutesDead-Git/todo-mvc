const axios = require('axios')

const incoming = '15394240744'
const demo = '18008472911'
const destination = '14054081344'
const spamCallsAPI = `https://api.callcontrol.com/api/2015-11-01/Enterprise/ShouldBlock/${demo}/?api_key=demo`

async function getTest(req, res) {
    try {
        const response = await axios.get(spamCallsAPI)
        console.log(response.data)
        res.render('test.ejs', { response })
    }
    catch (error) {
        console.log('Error caught when trying to fetch spam calls API:', error)
        res.render('test.ejs', { data: error.response.data })
    }
}

module.exports = { getTest }