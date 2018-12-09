const consts = require('./consts.js')

    consts.EMOTIONS = `It'll pass, as all things do, with time.`,
    consts.FINANCE= `Money doesn't grow on trees, you know.`,
    consts.WEATHER= `It is the way of nature. Not much to be done.`

const handleComplaints = function(complaint){
        console.log(complaint.type);
}

module.exports = {
    handleComplaints,
}
