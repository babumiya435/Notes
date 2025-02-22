import { Injectable } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { CanActivate } from '@angular/router';


@Injectable(
    {
        providedIn : 'root'
    }
)

export class AuthGuardService implements CanActivate {
    constructor(private authenticationService: AuthenticationService){}
    canActivate(): Promise<boolean> {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(true)
            },1000)
        })
    }
}