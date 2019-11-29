// Напишите класс Zoo с использованием полей, методов, геттеров, сеттеров. 
// Реализуйте и прокомментируйте на уровне класса интерфейсы Prototype и паттерт Factory.

class Zoo {
    _free = false;
    constructor(name,type, color, weight, speed, diet, canSwim, canFly){
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.speed = speed;
        this.diet = diet;
        this.canSwim = canSwim;
        this.canFly = canFly;
    }
    static create(...args){
        return new Zoo(...args);
        
    }
    get freedom(){
        return this._free;
       
    }
    set freedom(val){
        this._free=val;
    }
    getFeed(){
        console.log(`Вы дали корм ${this.name} и теперь ${this.type} сытый`);
        return this;
    }
    clone(){
        return new Zoo( 
            this.name,
            this.type,
            this.color,
            this.weight,
            this.speed,
            this.diet,
            this.canSwim,
            this.canFly
        )
        }
}

class ZooBuilder{
    constructor(){
        this.name =null;
        this.type =null;
        this.color = null;
        this.weight = null;
        this.speed = null;
        this.diet = null;
        this.canSwim = false;
        this.canFly = false;
    }
    static create(){
        return new ZooBuilder;
    }
    setName(val){
        this.name = val;
        return this;
    }
    setType(val){
        this.type = val;
        return this;
    }
    setColor(val){
        this.color = val;
        return this;
    }
    setWeight(val){
        this.weight = val +'kg';
        return this;
    }
    setSpeed(val){
        this.speed = val+'km';
        return this;
    }
    setDiet(val){
        this.diet = val;
        return this;
    }
    setSwim(val){
        this.canSwim = val;
        return this;
    }
    setFly(val){
        this.canFly = val;
        return this;
    }
    getZoo(){
        return new Zoo(this.name,this.type, this.color, this.weight,
             this.speed, this.diet, this.canSwim, this.canFly)
    }
    
    
}
const animal = ZooBuilder.create();


 const Leo = animal.setName('leo').setType('cat').setColor('yellow').setWeight('190').setSpeed('80').setDiet('predator').setSwim(true).setFly(false).getZoo()
console.log(Leo.freedom);

// Задание №3 (*)
// Напишите класс ZooBuilder для создания экземпляров класса Zoo из 1-го задания.
// Добавьте в класс ZooBuilder статический метод create. 
// Как использовать этот метод? 
// В чем преимущество использовать create над конструкцией new ZooBuilder?