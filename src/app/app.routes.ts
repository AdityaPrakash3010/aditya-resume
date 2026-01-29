import { Routes } from '@angular/router';
import { Resume } from './resume/resume';

export const routes: Routes = [
  {
    path: '',
    component: Resume   // 👈 LOAD ON ROOT
  },
  {
    path: '**',
    redirectTo: ''
  }
];
