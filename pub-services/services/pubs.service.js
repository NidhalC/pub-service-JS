var pubs = require('./pubs.json');

function listPub() {
    console.log(pubs);
    return pubs;
}

module.export ={
    listPub : listPub
};