import { CanActivateFn } from "@angular/router";

const authGuard: CanActivateFn = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(true);
        }, 1000)
    })
}

export {authGuard};