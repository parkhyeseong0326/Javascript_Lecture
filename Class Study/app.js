let player1 = new Object();

player1.name = "민준"
player1.job = "씨껌씨껌 능력자"
player1.race = "니거@@"
player1.stats = {
    STR: 1,
    DEX: 50,
    CON: 100,
    INT: 3,
    WIS: 2,
    CHA: 1
}


let player2 = {
    name: '미나준',
    job: '개발축구',
    race: '평발',
    stats: {
        STR: 100,
        DEX: 100,
        CON: 5,
        INT: 1,
        WIS: 1,
        CHA: 1
    }
}


let player3 = new playerFunc(
    "민주운",
    "머리 넘기기",
    "가르마 원툴",
    {
        STR: 70,
        DEX: 4,
        CON: 2,
        INT: 6,
        WIS: 1725,
        CHA: -1
    }
)

function playerFunc(name, job, race, stats) {
    this.name = name;
    this.job = job;
    this.race = race;
    this.stats = stats;
    this.getName = function() {
        return this.name;
    }
    this.getJob = function() {
        return this.job;
    }
    this.getRace = function() {
        return this.race;
    }
    this.setName = function(name) {
        this.name = name;
    }
    this.setJob = function(job) {
        this.job = job;
    }
    this.setRace = function(race) {
        this.race = race;
    }
}

let now = new Date();


let stu1 = new Map();
stu1.set('id',0);
stu1.set('이름','제임스');
stu1.set('전공','컴공');

let stu2 = new Map([
    ['id', 0],
    ['이름', '제임스'],
    ['전공', '컴공']

])

console.log(stu1)
console.log(stu1.get('id'))
console.log(stu1.get('이름'))
console.log(stu1.get('전공'))

stu1.delete('전공');
console.log(stu1);

stu1.clear();
console.log(stu1);  

player1.age = 200
player2.age = 200
player3.age = 200

console.log(player1.age)
console.log(player2.age)
console.log(player3.age)


player1.sayHello = function() {
    console.log("Hello")
}
player2.sayHello = function() {
    console.log("Hello")
}
player3.sayHello = function() {
    console.log("Hello")
}

let person = {
    name: "John Doe",
    age: 18,
    city: "Chung-Ju"
}
for (let key in person) {
    console.log(key + ": " + person[key])
}

for (let stat in player3.stats) {
    console.log(stat)
}

function show(obj, key) {
    console.log(obj[key])
}
show(player3, "job");

let cars = [
    {brand:"페라리", model:"911"},
    {brand:"포드", model:"머스탱"},
    {brand:"닷지", model:"차저"}
]

for (let i=0; i>cars.length; i++) {
    console.log(cars[i].model)
}