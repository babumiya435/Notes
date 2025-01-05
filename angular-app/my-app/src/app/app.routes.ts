import { Routes } from '@angular/router';
import { PromiseObservableComponent } from './Components/promise-observable/promise-observable.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { StoreComponent } from './Components/store/store.component';

export const routes: Routes = [
    { path : '', redirectTo : '/promise', pathMatch : 'full' },
    // { path : 'promise', component : PromiseObservableComponent },
    // {
    //     path: '',
    //     loadComponent: () => import('./Components/promise-observable/promise-observable.component').then(m => m.PromiseObservableComponent),
    //     title: 'promise-observable'
    // },
    {
        path: 'promise',
        loadComponent: () => import('./Components/promise-observable/promise-observable.component').then(m => m.PromiseObservableComponent),
        title: 'Promise-Observable Practice'
    },
    // { path : 'store', component : StoreComponent },
    {
        path : 'store',
        loadComponent : () => import('./Components/store/store.component').then(m => m.StoreComponent),
        title : 'Store Practice'
    },
    {
        path : 'routes',
        loadComponent : () => import('./Components/routes-practice/routes-practice.component').then(m => m.RoutesPracticeComponent),
        title : 'Routes Practice'
    },
    // { path : '**', component : PageNotFoundComponent },
    {
        path : "**",
        loadComponent : () => import('./Components/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent),
        title : 'Page Not Found'
    }
    // {
    //     path: '**',
    //     redirectTo: '/promise'
    // }
];
