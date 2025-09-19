import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Prerender },
  { path: 'nosotros', renderMode: RenderMode.Prerender },
  { path: 'productos', renderMode: RenderMode.Prerender },
  { path: '**', renderMode: RenderMode.Server } // fallback
];
