 interface IUser {
     name: string;
     age: number;
 }
 const getUserInfo = (user:IUser): string => `
    name  : ${user.name}, age : ${user.age}
 
 `