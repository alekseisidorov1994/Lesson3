// Напишите класс UserStatic реализующий паттер Singleton. 
// Как реализовать этот паттерн в рамках ES6 и в рамках браузера.

class UserStatic{
    constructor(){
        if(UserStatic.instansce){
            return UserStatic.instansce
        }
        UserStatic.instansce = this;
    }
    static create(){
        return new UserStatic();
    }
    show(val){
       console.log(val);
    }
}
const a = UserStatic.create()
const b = UserStatic.create()
console.log(a==b)

// ES5
// module.exports = UserStatic
// const UserStatic = require('./test.js')
// const user = new UserStatic;
// ES6
// export default UserStatic;
// import UserStatic from './...'
// Browser
// (function () {
// 	class UserStatic {
// 		constructor () {
// 			if (UserStatic.instance) {
// 				return UserStatic.instance
// 			}

// 			UserStatic.instance = this
// 		}
// 	}

//     window.UserStatic = UserStatic
    
// })();

