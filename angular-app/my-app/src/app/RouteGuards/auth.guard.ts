import { CanActivateFn } from "@angular/router";

const authGuard: CanActivateFn = () => {
    // return new Promise((resolve,reject) => {
    //     setTimeout(()=>{
    //         resolve(true);
    //     }, 1000)
    // })   ---> loads the route based on the authGuard response time and condition
    return true;
}

export {authGuard};