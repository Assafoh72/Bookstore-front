import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/service/modal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}

ngOnInit(): void {

}

// private isModalToDisplay: boolean = this.modalService.getIsModalToDisplay();


getIsModalToDisplay(){
  return this.modalService.getIsModalToDisplay()
}
updateIsModalToDisplay(isModalToDisplay: boolean){
  this.modalService.updateIsModalToDisplay(isModalToDisplay)
}


}
