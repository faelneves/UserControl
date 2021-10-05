import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeleteComponent implements OnInit {
  router: any;

  constructor(private modalService: NgbModal, private userService: UserService) { }
  
  @Input()
  userId:number = -1;
  @Output()
  onExcludeSuccess = new EventEmitter<any>();
  
  ngOnInit(): void {
  }
  
  open(modalContent:any) {
    this.modalService.open(modalContent).result.then((result) => {
      this.userService.deleteUser(this.userId).subscribe(() => {
        this.onExcludeSuccess.emit();
      }, (error) => {
        alert("erro encontrado");
        console.log(error);
      }
      );
    }
    );
  }

}
