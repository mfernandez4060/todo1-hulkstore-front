import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KardexService } from 'src/app/services/kardex.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styles: []
})
export class InventarioComponent implements OnInit {
  inventario: any = {};
  loading: boolean;


  constructor(private router: ActivatedRoute, private kardexService: KardexService) {
    this.router.params.subscribe(params => {
      this.loading = true;
      this.getInventario();
    });

  }

  ngOnInit() {
  }

  getInventario() {
    this.kardexService.getInventario().subscribe(inv => {
      this.inventario = inv;
      this.loading = false;
    },error =>{
      console.log("error");

      this.loading = false;
    });
  }

}
