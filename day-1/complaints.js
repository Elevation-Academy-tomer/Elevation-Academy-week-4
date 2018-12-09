const consts = require('./consts.js')
const complains = require('./complaintsHandler.js');

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS
}


complains.handleComplaints(complaint1) //should print "Money doesn't grow on trees, you know."
complains.handleComplaints(complaint2) //should print "Money doesn't grow on trees, you know."
complains.handleComplaints(complaint3) //should print "It'll pass, as all things do, with time."

