const pubs = require("../moks/pubs.json")

function listPub() {

    console.log(pubs);
    return pubs.map(item => {
       return new Pub(item.name,
            new Owner(item.owner.firstName, item.owner.lastName, item.owner.mail),
            new OpenHours(item.openHours.start, item.openHours.end),
            item.beers.map (item2 => new Beers(item2.type, item2.name)))
    });



}

class Pub {
    constructor (name, owner, openHours, beers){
        this.name = name;
        this.owner = owner;
        this.openHours = openHours;
        this.beers = beers;
    }
}
class Owner {
    constructor (firstName, lastName, mail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mail = mail; 
    }
}
class OpenHours {
    constructor( start, end){
        this.start = start;
        this.end = end;
    }
}

class Beers {
    constructor(type, name){
        this.type = type;
        this.name = name;
    }
}



module.exports = {
    listPub : listPub
};