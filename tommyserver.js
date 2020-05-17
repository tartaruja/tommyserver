// CONSTANTS
const express = require('express')
const app = express()
const port = 3000
const tommasosKnowledge = [
    'ma è spettacolare!',
    'facciamo la ola',
    'me ne vado a dormire' ,
    'fatemi ripetere per vedere se ho capito' ,
    'abbiamo fatto delle promesse che dovete mantenere'
];
// ACCESS POINTS
app.get('/', (req, res) => res.send(tommasosBrain(req, '')))
app.get('/wow', (req, res) => res.send(tommasosBrain(req, 'wow')))
app.get('/ola', (req, res) => res.send(tommasosBrain(req, 'ola')))
app.get('/sleep', (req, res) => res.send(tommasosBrain(req, 'sleep')))
app.get('/pesci', (req, res) => res.send(tommasosBrain(req, 'pesci')))
app.get('/vergine', (req, res) => res.send(tommasosBrain(req, 'vergine')))
// LOGIC
function tommasosBrain(req, action) {
    let tommasosResponse = 'Ciao ragazzi!'
    switch (action) {
        case 'wow': req.query.say !== undefined ?  tommasosResponse = req.query.say + ', ' + tommasosKnowledge[0] : tommasosResponse = tommasosKnowledge[0]; break;
        case 'ola': req.query.say !== undefined ?  tommasosResponse = req.query.say +  ', ' + tommasosKnowledge[1] : tommasosResponse = tommasosKnowledge[1]; break;
        case 'sleep': req.query.say !== undefined ?  tommasosResponse = req.query.say +  ', ' + tommasosKnowledge[2] : tommasosResponse = tommasosKnowledge[2]; break;
        case 'pesci': req.query.say !== undefined ?  tommasosResponse = req.query.say +  ', ' + tommasosKnowledge[3] : tommasosResponse = tommasosKnowledge[3]; break;
        case 'vergine': req.query.say !== undefined ?  tommasosResponse = req.query.say +  ', ' + tommasosKnowledge[4] : tommasosResponse = tommasosKnowledge[4]; break;
    }
    return tommasosResponse;
}
// LISTENER
app.listen(port, () => console.log(`Example app listening on port ${port}!`))