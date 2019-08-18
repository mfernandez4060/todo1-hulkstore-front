import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KardexService } from 'src/app/services/kardex.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class ComprasComponent implements OnInit {
  compra: Object = {
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
    this.kardexService.comprarProductos(forma.value).subscribe(
      (data: any) => {
        this.error = false;
        this.operacionOk = true;
      }, (error: any) => {
        this.message = `${error.status} ${error.error}`;
        this.error = true;
        this.operacionOk = false;
        console.log(error);
      });
  }
}
