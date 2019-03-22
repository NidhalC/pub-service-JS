var pubs = require('../moks/pubs.json');

function listPub() {
    console.log(pubs);
    return pubs;
}

module.exports ={
    listPub : listPub
};