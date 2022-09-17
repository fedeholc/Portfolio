import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { Edu, Trabajo, Idioma, Proyecto, Skill, Persona} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { ApiEndPoint } from '../../rutas-api';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-educacion-items-list',
  templateUrl: './educacion-items-list.component.html',
  styleUrls: ['./educacion-items-list.component.css'],
})
export class EducacionItemsList implements OnInit {
  @Input() portfolioItem: Edu = {
    id: 0,
    titulo: '',
    institucion: '',
    periodo: '',
    logo: '',
  };

  //ojo, ese modifica no lleva a ningun lado,
  //probar poner el modifica como está el delete con el emitter
  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();

  
  misdatosPortfolioList: Edu[] = [];

  editando: boolean = false;
  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getEducacion).subscribe((data: Edu[]) => {
      this.misdatosPortfolioList = data;
    });

  }

  onDelete(item: Edu) {
    this.onDeleteItem.emit(item);
  }


  onUpdate(itemPortfolio: Edu) {
    // lo que sigue acutaliza esta vista con el item
    // tal como estaba  antes de su cancelacion porque
    // sino con el binding tiene guardada la modificacion
    this.portfolioItem = itemPortfolio;
    this.onUpdateItem.emit(itemPortfolio);
  }
}
