//es6的箭头函数
var getUserInfs = function (user) {
    // return true
    return user.name + " \u6027\u522B :" + user.sex + "  \n        \u5C31\u804C\u4E8E : " + user.company;
};
console.log(getUserInfs({ name: '任康华', sex: '男', company: '字节' }));
