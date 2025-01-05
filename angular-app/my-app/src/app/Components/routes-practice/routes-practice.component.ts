import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-practice',
  standalone: true,
  imports: [],
  templateUrl: './routes-practice.component.html',
  styleUrl: './routes-practice.component.css'
})
export class RoutesPracticeComponent {
  public routes : string = `
  Before Angular 14 (before standalone components) 

  1.Routes creation: 
  ***************************************************** 
    import { Route } from '@angular/router'

    const routes: Route[] = [
      {path : '', redirectTo : '/home', pathMatch : 'full'},
      {
        path : 'home',
        component : HomeComponent,
        data : {title : 'Sameer'},
        canActivate : [AuthGuard, RoleGuard],
        resolve : { userData : UserResolver }
      },
      {path : '**', component : PageNotFound}
    ]
    *****************************************************   


  2.Router Injection(in AppModule):
  ***************************************************** 
    main.ts:
      bootstrapApplication(Appmodule)
        app.module.ts --> imports : [RouterModule.forRoot(routes)]
  *****************************************************   

  3.Routes lazy loading modules
  ***************************************************** 
    {
      path : 'home',
      loadChildren : () => import('homeModule/hm').then(m => m.HomeModule),
      data : {data},
      canActivate : [AuthGuard],
      resolve : {userData : UserResolver}
    }
  ***************************************************** 

  4.Routes navigation in .ts
  ***************************************************** 
    import {Router, ActivatedRoute}

    export class HomeComponent implements OnInit {
      constructor(private router: Router, private activatedRoute: ActivatedRoute ){}

      ngOnInit(){
        // for navigation we use Router service
        this.router.navigate(['/home']);
        this.router.navigate(['/home', 123])
        this.router.navigate(['/profie'], { queryParams : {id:123, ref: 'email'}})

        // for retrieving params we use ActivatedRoute service
        this.activaterRoute.snapshot.paramMap.get('id');
        this.activatedRoute.snapshot.data['title'];
        this.activatedRoute.queryParams.subscribe(params => console.log(params['id']));
        
      }
    }
  ***************************************************** 

  5.Routes navigation in .html
  ***************************************************** 
    <a routerLink = "/home"> Home </a>
    <a [routerlink] = "['/home']" [queryParams] = "{id: 123}"> Home with params </a>
  ***************************************************** 

  6.Route Gaurds
    RouteGuardService creation:
    *******************************************
    import {injectable} from '@angular/core';
    import {CanActivate} from '@angular/router';

    @Injectable(
      {
        providedIn : 'root'
      }
    )
    export class AuthGuardService implements CanActivate {
      constructor(private authService : AuthenticationService){}
      canActivate(): boolean{
        const isAuthenticated = !!localStorage.getItem('token');
        return isAuthenticated;
      }
    }
    *****************************************************  
    RouteGuardService usage in Routes creation:
    ***************************************************** 
      {
        path : 'home',
        component : HomeComponent,
        canActivate : [AuthGuardService]
      }
    ***************************************************** 

  7.Route Resolver
    Route resolver service creation:
    ***************************************************** 
    import {Injectable} from '@angular/core';
    import {Resolve} from '@angular/router';
    import {of, Observable} from 'rxjs';

    @Injectable(
      {
        providedIn : 'root'    
      }
    )
    export class UserDataResolverService implements Resolve<User> {
      resolve(): Observable<User>{
        return of('user Data from Server' as User);
      }
    }
    ***************************************************** 


  8.Router, ActivatedRoute services uasge
    Router:
    ***************************************************** 
    constructor(private router: Router){}
    navigation(){
      this.router.navigate(['/profile']);
      this.router.navigate(['/profile', 123]);
      this.router.navigate(['/profile'], {queryParams : {id: 123, ref: 'email'}});
    }
    ***************************************************** 
    ActivatedRoute:
    *****************************************************
    constructor(private route: ActivatedRoute){}
    ngOnInit(){
      this.route.snapshot.paramsMap.get('id') or .get('ref');
      this.route.snapshot.data['title'] or .data['data from resolver'];
      this.route.quryParams.subscribe(params => console.log(params['id']));
    }
    *****************************************************

  
  After Angular 14 (Standalone components)
  1.Routes creation:


  2.Routes Injection(in AppModule):


  3.Routes lazy loading


  4.Routes navigation in .ts


  5.Routes navigation in .html


  6.Route Gaurds


  7.Route Resolver


  8.Route, Activated Route services uasge
  `
}
