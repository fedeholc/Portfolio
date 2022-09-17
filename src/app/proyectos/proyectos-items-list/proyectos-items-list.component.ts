import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

import { Proyecto} from 'src/app/portfolio-interface';
import { PortfolioService } from 'src/app/portfolio.service';
import { AuthService } from '../../shared/services/auth.service';
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-proyectos-items-list',
  templateUrl: './proyectos-items-list.component.html',
  styleUrls: ['./proyectos-items-list.component.css']
})
export class ProyectosItemsListComponent implements OnInit {

  @Input() portfolioItem: Proyecto = {
    id: 0,
    nombre: '',
    descripcion: '',
    enlace: '',
    logo: '',
  };

  @Output() onDeleteItem: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();

  misdatosPortfolioList: Proyecto[] = [];

  texto: string = '';
  editando: boolean = false;
  constructor(
    private datosPortfolio: PortfolioService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.datosPortfolio
      .obtenerDatosPortfolio(ApiEndPoint.getProyecto)
      .subscribe((data: Proyecto[]) => {
        this.misdatosPortfolioList = data;
      });
  }

  onDelete(item: any) {
    this.onDeleteItem.emit(item);
  }

  onUpdate(itemPortfolio: any) {
    // lo que sigue acutaliza esta vista con el item
    // tal como estaba  antes de su cancelacion porque
    // sino con el binding tiene guardada la modificacion
    this.portfolioItem = itemPortfolio;
    this.onUpdateItem.emit(itemPortfolio);
  }
}
