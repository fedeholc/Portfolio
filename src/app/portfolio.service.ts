import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  obtenerDatosPortfolio(miUrl: string): Observable<any> {
    
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin':'*'};

    return this.http.get<any>(miUrl, {'headers':headers});
  }

  addItemPortfolio(miUrl: string, item: any): Observable<any> {
    return this.http.post<any>(miUrl, item);
  }

  updateItemPortfolio(miUrl: string, item: any): Observable<any> {
     return this.http.put<any>(miUrl, item);
  }

  deleteItemPortfolio(miUrl: string, item: any): Observable<any> {
    return this.http.delete<any>(miUrl + item.id);
  }
}
