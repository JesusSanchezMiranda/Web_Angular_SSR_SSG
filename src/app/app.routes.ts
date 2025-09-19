
import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
  { 
    path: '', 
    component: Inicio
  },

  { 
    path: 'nosotros', 
    component: Nosotros
  },

  { 
    path: 'productos', 
    component: Productos
  },
];


