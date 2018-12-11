const express = require('express')
const stripchar = require('stripchar').StripChar;
const router = express.Router()
const _ = require('underscore')._;

wordCounter ={
   cake :5,
    is : 1,
    the : 100,
    best :1,
    a : 89,
    b :7,
    c :90,
    d : 8
}

router.get('/word/:word', function (req, res) {
    const counter = {}
    wordCounter[req.params.word] == undefined ? counter.count = 0 : counter.count = wordCounter[req.params.word]
    res.send(counter)
})

router.post('/word', function (req, res) {
    wordCounter[req.body.word] == undefined ? wordCounter[req.params.word] =  1 : wordCounter[req.params.word]++
    res.send({
        text : `Add ${req.params.word}`,
        currentCount: wordCounter[req.params.word]
    })
})

router.post('/words', function (req, res) {
    let words = stripchar.RSExceptUnsAlpNum(req.body.words , ' ').toLowerCase().split(' ');
    let oldNum = 0;
    let newNum = 0;
    words.forEach(w => 
        wordCounter[w] == undefined ? wordCounter[w] =  1 && newNum++
        : wordCounter[w]++ && oldNum++
        )
    
    res.send({
        text : `Add ${newNum} words , ${oldNum} already existed, ${--newNum}`
    })
})


router.get('/total', function (req, res) {
    let counter = 0;
    for(let w in wordCounter){
        counter += wordCounter[w]
    }
    res.send({counter : counter})
})

router.get('/popular', function (req, res) {
    const arr = Object.entries(wordCounter)
    const top = arr.sort((a,b)=>a[1]<b[1]).slice(0,1)
    topObjcet = top[0]
    res.send({text: topObjcet[0], count: topObjcet[1] })
})

router.get('/ranking', function (req, res) {
    const arr = Object.entries(wordCounter)
    const top = arr.sort((a,b)=>a[1]<b[1]).slice(0,5);
    let obj = {}
    top.forEach(r =>{
       obj[r[0]]=r[1]
    })
    res.send(obj)
})

router.get('/sanity', function (req, res) {
    console.log("Server up and running")
    res.end()
})


module.exports = router