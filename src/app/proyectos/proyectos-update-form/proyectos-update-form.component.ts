import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto} from 'src/app/portfolio-interface';
import { PortfolioService } from '../../portfolio.service';
 
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-proyectos-update-form',
  templateUrl: './proyectos-update-form.component.html',
  styleUrls: ['./proyectos-update-form.component.css']
})
export class ProyectosUpdateFormComponent implements OnInit {
 
  @Output() onUpdateItem: EventEmitter<any> = new EventEmitter();
  @Input() portfolioItemUpdate: Proyecto = {
    id: 0,
    nombre: '',
    descripcion: '',
    enlace: '',
    logo: '',
  };

 
  portfolioOriginalItem: Proyecto = {
    id: 0,
    nombre: '',
    descripcion: '',
    enlace: '',
    logo: '',
  };
  
  misdatosPortfolioList: Proyecto[] = [];
  
  closeResult: any;

  constructor(
 
    private datosPortfolio: PortfolioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getProyecto).subscribe((data: Proyecto[]) => {
      this.misdatosPortfolioList = data;
    });
    this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
  }

  saveUpdate() {
    this.onUpdateItem.emit(this.portfolioItemUpdate);
    this.portfolioOriginalItem = { ...this.portfolioItemUpdate };
    this.modalService.dismissAll();
  }

  cancelUpdate() {
    this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
    this.onUpdateItem.emit(this.portfolioItemUpdate);
    //  this.principalComponent.cancelUpdateEducacion(this.educacionOriginalItem);
    // ya no hace falta esa llamada porque hice un doble emit - emit hasta llegar
    // al formulario principal que tiene la lista de items.
    this.modalService.dismissAll();
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.portfolioItemUpdate = { ...this.portfolioOriginalItem };
          this.onUpdateItem.emit(this.portfolioItemUpdate);
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}