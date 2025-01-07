import { Component } from '@angular/core';

@Component({
  selector: 'app-routes-practice',
  standalone: true,
  imports: [],
  templateUrl: './routes-practice.component.html',
  styleUrl: './routes-practice.component.css'
})
export class RoutesPracticeComponent {
  public routesBefore : string = `
  
  Before Angular 14 (before standalone components) 

  1.Routes creation: (before standalone components) 
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

  2.Router Injection(in AppModule):(before standalone components) 
  ***************************************************** 
    main.ts:
      bootstrapApplication(Appmodule)
        app.module.ts --> imports : [RouterModule.forRoot(routes)]
  *****************************************************   

  3.Routes lazy loading modules(before standalone components) 
  ***************************************************** 
    {
      path : 'home',
      loadChildren : () => import('homeModule/hm').then(m => m.HomeModule),
      data : {data},
      canActivate : [AuthGuard],
      resolve : {userData : UserResolver}
    }
  ***************************************************** 

  4.Routes navigation in .ts(before standalone components) 
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

  5.Routes navigation in .html(before standalone components) 
  ***************************************************** 
    <a routerLink = "/home"> Home </a>
    <a [routerlink] = "['/home']" [queryParams] = "{id: 123}"> Home with params </a>
  ***************************************************** 

  6.Route Gaurds(before standalone components) 
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

  7.Route Resolver(before standalone components) 
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


  8.Router, ActivatedRoute services uasge(before standalone components) 
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
`;

  public routesAfter : string = `
  After Angular 14 (Standalone components)

  1.Routes creation:(After standalone components) 
  *****************************************************
    import {Route} from '@angular/router';

    const routes: Route[] = [
      { path: '', redirectTo: '/home', pathMatch: 'full'},
      {
        path: 'home',
        loadComponent: ()=> import('home.component').then(m => m.HomeComponent),
        data: {title : 'home'},
        canActivate: [AuthGuardFn],
        resolve: {userData: ResolveFn}
      },
      {
        path: '**', component: PageNotFound
      }
    ]
  *****************************************************

  2.Routes Injection(in AppModule):(After standalone components) 
  *****************************************************
  import {bootstrapApplication} from '@anguler/platform-browser';
  import {provideRouter} from '@anguar/router';
  import {HomeComponent} from './home.component';
  import {routes} from './app.routes'

  bootstrapApplication(HomeComponent, {
    providers: [provideRouter(routes)]
  })
  *****************************************************

  3.Routes lazy loading componets(After standalone components) 
  *****************************************************
  {
    path: 'profile',
    loadComponent: ()=> import('profile.component').then(m => m.ProfileComponent),
    data: {title: 'profile'},
    canActivate: [AuthGuardFn],
    resolve: {userData: UserResolveFn}
  }
  *****************************************************

  4.Routes navigation in .ts(After standalone components) 
  *****************************************************
  Router Service usage:
    constructor(private router: Router){}
    navigate(){
      this.router.navigate(['/profile']);
      this.router.navigate(['/profile', 123]);
      this.router.navigate(['/profile'], {queryParams : {id: 123, ref: 'email'}});
    }
  ActivatedRoute Service usage:
    constructor(private activaterRoute: ActivatedRoute){}
    ngOnInit(){
      // retrive query params
      this.activatedRoute.snapshot.paramsMap.get('id');
      this.activatedRoute.snapshot.data['resolverData'];
      this.activatedRoute.queryParams.subscribe(params => console.log(params));
    }
  *****************************************************

  5.Routes navigation in .html(After standalone components) 
  *****************************************************
  <a routerlink = "/profile"> Profile </a>
  <a [routerlink] = "['/profile']" [queryParams] = "{id: 123}"
  *****************************************************

  6.Route Gaurds(After standalone components) 
  *****************************************************
  AuthGuardFn is a pure function:

  import {CanActivateFn, Router} from '@angular/router';
  import {inject} from '@angular/core';
  
  export const authGuardFn: CanActivateFn = () => {
    const router = inject(Router);
    const isAuthenticated: boolean = !!localStorage.getItem('token');
    if (!isAuthenticated){
        router.navigate([/login]);
        return false;
    }
    return true;
  }

  {
    path: '/profile',
    loadComponent: ()=> import('profile').then(m => m.ProfileComponent),
    canActivate: [authGuardFn]
  }
  *****************************************************

  7.Route Resolver(After standalone components) 
  *****************************************************
  import {UserService} from './user.service';
  import {ResolveFn} form '@angular/router';

  export const userResolverFn: ResolveFn<any> = () =>{
    return this.userService.getUserDetails().pipe(
      map((data)=>{
        name: data.name.toUpperCase,
        role: data.role
      }),
      catchError((e)=>{
        router.navigate([/login]);
        return of(null);
      })
    )
  }
  *****************************************************


  8.Route, Activated Route services uasge(After standalone components) 
  *****************************************************
  Router Service usage:
    constructor(private router: Router){}
    navigate(){
      this.router.navigate(['/profile']);
      this.router.navigate(['/profile', 123]);
      this.router.navigate(['/profile'], {queryParams : {id: 123, ref: 'email'}});
    }
  ActivatedRoute Service usage:
    constructor(private activaterRoute: ActivatedRoute){}
    ngOnInit(){
      // retrive query params
      this.activatedRoute.snapshot.paramsMap.get('id');
      this.activatedRoute.snapshot.data['resolverData'];
      this.activatedRoute.queryParams.subscribe(params => console.log(params));
    }
  *****************************************************
  `
}
