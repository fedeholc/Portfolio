import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Edu, Trabajo, Idioma, Proyecto, Skill, Persona} from 'src/app/portfolio-interface';
import { PortfolioService } from '../../portfolio.service';
 
import { ApiEndPoint } from '../../rutas-api';

@Component({
  selector: 'app-educacion-update-form',
  templateUrl: './educacion-update-form.component.html',
  styleUrls: ['./educacion-update-form.component.css'],
})
export class EducacionUpdateForm implements OnInit {
  @Input() portfolioItemUpdate: Edu = {
    id: 0,
    titulo: '',
    institucion: '',
    periodo: '',
    logo: '',
  };
  @Output() onUpdateItem: EventEmitter<Edu> = new EventEmitter();
 
  closeResult: any;
  portfolioOriginalItem: Edu = {
    id: 0,
    titulo: '',
    institucion: '',
    periodo: '',
    logo: '',
  };
  misdatosPortfolioList: Edu[] = [];

  constructor(
 
    private datosPortfolio: PortfolioService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatosPortfolio(ApiEndPoint.getEducacion).subscribe((data: Edu[]) => {
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
