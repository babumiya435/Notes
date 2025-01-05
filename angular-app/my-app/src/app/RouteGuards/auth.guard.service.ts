import { Injectable } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { CanActivate } from '@angular/router';


@Injectable(
    {
        providedIn : 'root'
    }
)



export class AuthGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService){}
    canActivate() {
        return true;
    }
}