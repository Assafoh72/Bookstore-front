import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../core/service/modal.service';
import { Router, RouterLink } from '@angular/router';
import { BookService } from '../../core/service/book.service';
import { UserInfoService } from '../../core/service/user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  constructor(private modalService: ModalService, private bookService: BookService, private router: Router, private userInfoService: UserInfoService) {}
  private isUserLogedInSubscription!: Subscription

  public isUserLogedIn!: boolean



ngOnInit(): void {

  this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe (isUserLogedIn =>{
    this.isUserLogedIn = isUserLogedIn;
    this.userInfoService.getIsUserLogedIn();
  })

}

// private isModalToDisplay: boolean = this.modalService.getIsModalToDisplay();


getIsModalToDisplay(){
  return this.modalService.getIsModalToDisplay()
}
updateIsModalToDisplay(isModalToDisplay: boolean){
  this.modalService.updateIsModalToDisplay(isModalToDisplay)
}
onSubmit(){
  this.updateIsModalToDisplay(false)
  this.bookService.updateIsModalOnDisplay(true);
  console.log(this.isUserLogedIn);


  if(this.isUserLogedIn){
    this.router.navigate(['/chart']);
  }
  else{
    this.router.navigate(['/user-cart']);
  }






}

ngOnDestroy(): void{
  this.isUserLogedInSubscription.unsubscribe();

}


}
