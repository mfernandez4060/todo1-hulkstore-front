import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class KardexService {
  token = '';


  constructor(private http: HttpClient) {

  }

  getQuery(query: string) {
    const url = `/api/v1${query}`;
    const headers = new HttpHeaders({ Authorization: `'Bearer ${this.token}'` });

    return this.http.get(url, { headers });
  }

  getPost(query: string, data: any) {
    const url = `api/v1${query}`;
    const headers = new HttpHeaders({ Authorization: `'Bearer ${this.token}'` });

    return this.http.post(url, data, { headers });
  }

  getInventario() {
    return this.getQuery('/inventario/');
  }

  getProducto(codproducto: string) {
    return this.getQuery(`/productos/${codproducto}`);
  }

  comprarProductos(compra: Object) {
    return this.getPost('/operaciones/producto/compra', compra);
  }

  venderProductos(venta: any) {
    return this.getPost('/operaciones/producto/venta', venta);
  }

  getKardex(codproducto: string) {
    return this.getQuery(`/kardex/${codproducto}`);
  }

}
