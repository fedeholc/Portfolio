import { Component, OnInit } from '@angular/core';
import { Idioma } from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import {Restaurar} from 'src/app/restaurar';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {

  misdatosPortfolioList: Idioma[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getIdioma).subscribe((data: Idioma[]) => {
      this.misdatosPortfolioList = data;
    });
    
  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postIdioma,itemPortfolio).subscribe((item: Idioma) => {
      this.misdatosPortfolioList.push(item);
    });
  }

 
  updateItem(itemPortfolio: any){
    
    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putIdioma, itemPortfolio).subscribe((item: Idioma) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delIdioma, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Idioma) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }

  restaurar(){
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delIdioma, element).subscribe(() => {
       });
    });
    this.misdatosPortfolioList.splice(0);
   
    Restaurar.idiomas.forEach((element, index) => {
     this.datosPortfolio.addItemPortfolio(ApiEndPoint.postIdioma, element).subscribe((item: Idioma) => {
        this.misdatosPortfolioList.push(item);
      });
    });
  }
}
