function Person() {}
Person.prototype.type = 'object named Person'
console.log(Person.prototype);
//{ type: 'object named Person' }


function People()  {}
People.prototype = new Person()

person = new Person()
person.type = 'object named Person'

res = Reflect.ownKeys(person)
console.log(res);
//[]   [ 'type' ]

res = person instanceof Person
console.log(res);
//true

res = person.type
console.log(res);
//object named Person

res = person.__proto__ === Person.prototype
console.log(res);
//true

res = Person.prototype.constructor === Person
console.log(res);
//true

p = new People()
res = [p instanceof Object, p instanceof Person, p instanceof People]
console.log(res);
//[ true, true, true ]

res = p.type
console.log(res);
//object named Person


res = p.__proto__
console.log(res);
//Person {}

res = p.__proto__.__proto__
console.log(res);
//{ type: 'object named Person' }

res = p.__proto__.__proto__.__proto__
console.log(res);
// [Object: null prototype] {}
res = p.__proto__.__proto__.__proto__.__proto__
console.log(res);
// null
