import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../shared/services/auth.service';
import { ApiEndPoint } from '../rutas-api';
import { Restaurar } from '../restaurar';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {


  misdatosPortfolioList: Skill[] = [];

  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getSkill).subscribe((data: Skill[]) => {
      this.misdatosPortfolioList = data;
    });

  }

  addItem(itemPortfolio: any) {
    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, itemPortfolio).subscribe((item: Skill) => {
      this.misdatosPortfolioList.push(item);
    });
  }



  updateItem(itemPortfolio: any) {

    this.datosPortfolio.updateItemPortfolio(ApiEndPoint.putSkill, itemPortfolio).subscribe((item: Skill) => {

    });
  }

  deleteItem(itemPortfolio: any) {
    this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delSkill, itemPortfolio).subscribe(() => {
      this.misdatosPortfolioList = this.misdatosPortfolioList.filter((element: Skill) => {
        return element.id !== itemPortfolio.id;
      });
    });
  }

  restaurar() {
    this.misdatosPortfolioList.forEach((element, index) => {
      this.datosPortfolio.deleteItemPortfolio(ApiEndPoint.delSkill, element).subscribe(() => {
      });
    });
    this.misdatosPortfolioList.splice(0);

    /*  Restaurar.skills.forEach((element, index) => {
      this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, element).subscribe((item: Skill) => {
         this.misdatosPortfolioList.push(item);
       });
     }); */
    // Para el deploy a heroku o koyeb/planetscale lo de arriba funcionaba bien
    // pero ahora con la base de datos en clever cloud que solo admite 5 conexiones
    // simultaneas, eso no sirve, hay que ir una por una.
    // 
    // Aún no encontré el equivalente de async/await para trabajar con observables
    // mientras tanto queda esta "solución"
    // otra alternativa sería modificar la api para mandar todo en una sola petición 

    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[0]).subscribe((item: Skill) => {
      this.misdatosPortfolioList.push(item);
      this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[1]).subscribe((item: Skill) => {
        this.misdatosPortfolioList.push(item);
        this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[2]).subscribe((item: Skill) => {
          this.misdatosPortfolioList.push(item);
          this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[3]).subscribe((item: Skill) => {
            this.misdatosPortfolioList.push(item);
            this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[4]).subscribe((item: Skill) => {
              this.misdatosPortfolioList.push(item);
              this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[5]).subscribe((item: Skill) => {
                this.misdatosPortfolioList.push(item);
                this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[6]).subscribe((item: Skill) => {
                  this.misdatosPortfolioList.push(item);
                  this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[7]).subscribe((item: Skill) => {
                    this.misdatosPortfolioList.push(item);
                    this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[8]).subscribe((item: Skill) => {
                      this.misdatosPortfolioList.push(item);
                      this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[9]).subscribe((item: Skill) => {
                        this.misdatosPortfolioList.push(item);
                        this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[10]).subscribe((item: Skill) => {
                          this.misdatosPortfolioList.push(item);
                          this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[11]).subscribe((item: Skill) => {
                            this.misdatosPortfolioList.push(item);
                            this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[12]).subscribe((item: Skill) => {
                              this.misdatosPortfolioList.push(item);
                              this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[13]).subscribe((item: Skill) => {
                                this.misdatosPortfolioList.push(item);
                                this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[14]).subscribe((item: Skill) => {
                                  this.misdatosPortfolioList.push(item);
                                  this.datosPortfolio.addItemPortfolio(ApiEndPoint.postSkill, Restaurar.skills[15]).subscribe((item: Skill) => {
                                    this.misdatosPortfolioList.push(item);

                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });


  }
}
