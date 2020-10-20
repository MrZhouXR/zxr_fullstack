//es6的箭头函数
const getUserInfs = (user:{name:string,sex:string,company:string}):string => {
    // return true
    return `${user.name} 性别 :${user.sex}  
        就职于 : ${user.company}`;

}
console.log(getUserInfs({name:'刘志鹏', sex:'男',company:'抖音'}))
// console.log(getUserInfs({name:'任康华',sex:'男',company:'字节'}))