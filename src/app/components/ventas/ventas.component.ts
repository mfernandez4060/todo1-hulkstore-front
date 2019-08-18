import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from 'src/app/services/kardex.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})

export class VentasComponent implements OnInit {
  venta: Object = {
    codProducto: null,
    cantidad: null,
    costo: null
  }
  error: boolean;
  message: string;
  operacionOk: boolean;

  constructor(private kardexService: KardexService) {
    this.operacionOk = false;
    this.error = false;
  }

  ngOnInit() {
  }

  guardar(forma: NgForm) {
    this.kardexService.venderProductos(forma.value).subscribe(
      (data: any) => {
        this.error = false;
        this.operacionOk = true;
      }, (error: any) => {
        console.log(error);
        this.message = `${error.status} ${error.error}`;
        this.error = true;
        this.operacionOk = false;
      });
  }

}
