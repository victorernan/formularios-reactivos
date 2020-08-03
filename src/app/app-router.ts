import { Routes, RouterModule } from '@angular/router';
//import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

export const ROUTES: Routes = [
  // { path: 'templete', component: TemplateComponent },
  { path: 'reactivo', component: ReactiveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'reactivo' },
];
