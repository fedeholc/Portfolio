import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from 'src/app/portfolio-interface';
import { Restaurar } from 'src/app/restaurar';
@Component({
  selector: 'app-skills-add-item-form',
  templateUrl: './skills-add-item-form.component.html',
  styleUrls: ['./skills-add-item-form.component.css']
})
export class SkillsAddItemFormComponent implements OnInit {


 
  @Output() onAddItem: EventEmitter<any> = new EventEmitter();

  closeResult: any;

  portfolioNewItem: Skill = {
    id: 0,
    nombre: '',
    valor: 0,
    logo: Restaurar.defaultLogoURL,
   };
 

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  // revisar si algo de esto vale la pena
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg', scrollable: true})
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
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

  addItem() {
    if (this.portfolioNewItem.nombre.length === 0) {
      alert('Please add a task!'); //cambiar
      return;
    }

    this.onAddItem.emit(this.portfolioNewItem);
    
    this.portfolioNewItem = {
      id: 0,
      nombre: '',
      valor: 0,
      logo: Restaurar.defaultLogoURL, 
 
    };
    this.modalService.dismissAll('guardar');
  }

  cancelAddItem() {
    this.portfolioNewItem = {
      id: 0,
      nombre: '',
      valor: 0,
      logo: Restaurar.defaultLogoURL, 
       
    };
    this.modalService.dismissAll('cancelar');
  }
}
