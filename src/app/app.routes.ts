import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService } from './services/auth-guard.service';
import { InventarioComponent } from './components/inventario/inventario.component';
import { KardexComponent } from './components/kardex/kardex.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';


const APP_ROUTES: Routes = [
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'inventario',
    component: InventarioComponent
    ,
    canActivate: [AuthGuardService]
  },
  {
    path: 'kardex',
    component: KardexComponent
    , canActivate: [AuthGuardService]
  },
  {
    path: 'compras',
    component: ComprasComponent
    , canActivate: [AuthGuardService]
  },
  {
    path: 'ventas',
    component: VentasComponent
    , canActivate: [AuthGuardService]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
export class FeatureRoutingModule { }
