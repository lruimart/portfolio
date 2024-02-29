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
    {
        path: 'skills',
        loadComponent: () => import('./pages/home/sections/skills/skills.component').then(c => c.SkillsComponent)
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/home/sections/contact/contact.component').then(c => c.ContactComponent)
    },
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
