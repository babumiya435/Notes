import { Routes } from '@angular/router';
import { PromiseObservableComponent } from './Components/promise-observable/promise-observable.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

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
        title: 'promise-observable'
    },
    { path : '**', component : PageNotFoundComponent },
    // {
    //     path: '**',
    //     redirectTo: '/promise'
    // }
];
