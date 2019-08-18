import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KardexService } from 'src/app/services/kardex.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styles: []
})
export class KardexComponent implements OnInit {
  kardex: any = {};
  loading: boolean;
  error: boolean;
  message: string;
  codProducto: any;

  constructor(private router: ActivatedRoute, private kardexService: KardexService) {
    this.router.params.subscribe(params => {
      this.loading = false;
      this.error = false;
      this.codProducto = '';
    });
  }

  ngOnInit() {
  }

  getKardex(codproducto: string) {
    this.kardexService.getKardex(codproducto).subscribe(kardex => {
      this.kardex = kardex;
      this.loading = false;
      this.error = false;
    }, error => {
      this.loading = false;
      this.message = error;
      this.message = `${error.status} ${error.error}`;
      this.error = true;
    });
  }

  buscar(codproducto: string) {
    this.loading = true;
    this.kardexService.getProducto(codproducto).subscribe((data: any) => {
      console.log(data);

      this.codProducto = data.codProducto;
      this.getKardex(codproducto);
      this.loading = false;
      this.error = false;
    }, (error) => {
      this.loading = false;
      this.message = `${error.status} ${error.error}`;
      this.error = true;
    });
  }
}
