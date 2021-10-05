import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  @Input()
  title = '';
  @Input()
  text = '';

  constructor(private modalService: NgbModal) { }
  

  
  ngOnInit(): void {
  }

  openSm(modalContent:any) {
    this.modalService.open(modalContent).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log(reason);
    });
  }

}
