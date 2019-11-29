// Задание №5 (**)
// Напишите 2 класса, реализующие паттерн Abstract Factory 
// на примере спортивных мероприятий. Интерфейс для этих классов:

// interface SportEvent {
//     getSportsman();
//     getEvent();
// }


class Swimmer{
    constructor(){
        this.man = 'swimmer'
    }
}
class SwimmingPlace{
    constructor(){
        this.place = 'the Venice'
    }
}
class ChessPlayer{
    constructor(){
        this.man = 'chessplayer'
    }
}
class CheesPlace{
    constructor(){
        this.place = 'the Nordway'
    }
}

class SwimСompetitions{
    getSportsman(){
        return new Swimmer()
    }
    getEvent(){
        return new  SwimmingPlace()
    }
}

class ChessСompetitions{
    getSportsman(){
        return new ChessPlayer()
    }
    getEvent(){
        return new  CheesPlace()
    }
}

function makeEvent(man, place){
    console.log(`The competitions between ${man.man}s will be  in ${place.place}`);
}

{
const factory = new SwimСompetitions()
const man = factory.getSportsman()
const place = factory.getEvent()
makeEvent(man,place)
}
{
const factory = new ChessСompetitions()
const man = factory.getSportsman()
const place = factory.getEvent()
makeEvent(man,place)
}
