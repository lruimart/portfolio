import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    // {
    //     path: 'about-me'
    // },
    // {
    //     path: 'experience'
    // },
    // {
    //     path: 'skills'
    // },
    // {
    //     path: 'contact'
    // },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
