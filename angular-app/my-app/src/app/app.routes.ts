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
        title: 'promise-observable'
    },
    // { path : 'store', component : StoreComponent },
    {
        path : 'store',
        loadComponent : () => import('./Components/store/store.component').then(m => m.StoreComponent),
        title : 'store'
    },
    { path : '**', component : PageNotFoundComponent },
    // {
    //     path: '**',
    //     redirectTo: '/promise'
    // }
];
