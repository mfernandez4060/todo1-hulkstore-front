import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { AuthService } from './services/auth.service';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuardService } from './services/auth-guard.service';
import { InventarioComponent } from './components/inventario/inventario.component';
import { KardexComponent } from './components/kardex/kardex.component';
import { ComprasComponent } from './components/compras/compras.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { KardexService } from './services/kardex.service';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CallbackComponent,
    InventarioComponent,
    KardexComponent,
    ComprasComponent,
    VentasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [AuthService, AuthGuardService, KardexService] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
