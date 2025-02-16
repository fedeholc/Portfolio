import { Component, OnInit } from '@angular/core';
import { Edu} from 'src/app/portfolio-interface';
import { Restaurar } from '../restaurar';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  misdatosPortfolioList: Edu[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getEducacion).subscribe((data: Edu[]) => {
      this.misdatosPortfolioList = data;
    });

  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion,itemPortfolio).subscribe((item: Edu) => {
      this.misdatosPortfolioList.push(item);
    });
  }
 

  updateItem(itemPortfolio: any){
    
    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putEducacion, itemPortfolio).subscribe((item: Edu) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delEducacion, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Edu) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }

  restaurar(){
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delEducacion, element).subscribe(() => {
       });
    });
    this.misdatosPortfolioList.splice(0);
      
 /*    Restaurar.educacion.forEach((element, index) => {
   
        this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, element).subscribe((item: Edu) => {
          this.misdatosPortfolioList.push(item);
  
        });
      });  */
         // Para el deploy a heroku o koyeb/planetscale lo de arriba funcionaba bien
    // pero ahora con la base de datos en clever cloud que solo admite 5 conexiones
    // simultaneas, eso no sirve, hay que ir una por una.
    //
    // Aún no encontré el equivalente de async/await para trabajar con observables
    // mientras tanto queda esta "solución"
    // otra alternativa sería modificar la api para mandar todo en una sola petición 
  
        this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, Restaurar.educacion[0]).subscribe((item: Edu) => {
          this.misdatosPortfolioList.push(item);
          this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, Restaurar.educacion[1]).subscribe((item: Edu) => {
            this.misdatosPortfolioList.push(item);
            this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, Restaurar.educacion[2]).subscribe((item: Edu) => {
              this.misdatosPortfolioList.push(item);
              this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, Restaurar.educacion[3]).subscribe((item: Edu) => {
                this.misdatosPortfolioList.push(item);
                this.datosPortfolio.addItemPortfolio(ApiEndPoint.postEducacion, Restaurar.educacion[4]).subscribe((item: Edu) => {
                  this.misdatosPortfolioList.push(item);

                });
              });
            });
          });
        });
       
     


  }


}
