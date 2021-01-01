// 工厂模式



function User(name,age,career) {
  this.name = name,
  this.age = age,
  this.career = career
}

function Coder(name, age) {
  this.name = name,
  this.age = age,
  this.career = 'coder',
  this.work = ['写代码','写系分','修bug']
}
function Leader(name, age) {
  this.name = name,
  this.age = age,
  this.career = 'leader',
  this.work = ['111','222','333']
}

function Factory(name,age,career) {
  let work;
  switch (career) {
    case 'coder':
      work = ['写代码','写系分','修bug']
      break
    case 'leader': 
      work = ['111','222','333']
      break
    default:
      break;
  }
  return new User(name,age,career,work)
}
