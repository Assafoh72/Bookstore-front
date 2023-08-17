import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  private isModalToDisplay: boolean = false;

  getIsModalToDisplay(){
    return this.isModalToDisplay
  }
  updateIsModalToDisplay(isModalToDisplay: boolean){
    this.isModalToDisplay = isModalToDisplay;
  }

}
