import { Routes } from '@angular/router';
import {Home} from '../home/home';
import {Creating} from '../creating/creating';
import {Index} from '../index';
import {Reading} from '../reading/reading';

export const routes: Routes = [
  {
    path: 'home',
    component:Home
  },
  {
    path: 'creating',
    component: Creating
  },
  {
    path: 'index',
    component: Index
  },
  {
    path: 'reading',
    component:Reading
  }
];
