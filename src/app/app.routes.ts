import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
  { path: 'about-me', loadComponent: () => import('./pages/about/about.page').then(m => m.AboutPage) },
  { path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.page').then(m => m.PortfolioPage) },
  { path: 'resume', loadComponent: () => import('./pages/resume/resume.page').then(m => m.ResumePage) },
];
