import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
    },
    {
        path: 'about-me',
        loadComponent: () => import('./pages/home/sections/about-me/about-me.component').then(c => c.AboutMeComponent)
    },
    {
        path: 'experience',
        loadComponent: () => import('./pages/home/sections/experience/experience.component').then(c => c.ExperienceComponent)
    },
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
