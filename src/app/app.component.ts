import { Component } from '@angular/core';

/*@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
// el selector se prefija con algo que lo identificamos como parte
// de nuestra aplicacion porl o que selecciono pm para la product manager
// osea la gestion de productos

// y es con `` se llaman backticks
@Component({
  selector: 'pm-root',
  /** llamo a pm-products que es un  componente el produc-list.componente esto es una directiva */
  template:  `
            <div><h1>{{pageTitle}}</h1>
              <!-- div>Mi primer componente</div -->
              <pm-products></pm-products>
            </div>
            `
  /**si quiero es un archivo .html es con templateUrL */
})

export class AppComponent {
  pageTitle: string = 'Acme Prodcut Management';
}
