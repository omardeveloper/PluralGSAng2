import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';


@NgModule({
  /*localizar su selector*/
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  /*browsermodule para que la aplicacion se ejecute correctamente en la aplicacion*/
  imports: [
    BrowserModule
  ],
  /*proveedores es para servicios */
  providers: [],
  /** el componente de inicio de la aplicacion */
  bootstrap: [AppComponent]
})
export class AppModule { }
