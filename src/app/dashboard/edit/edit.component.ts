import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService) { }
  
  @Input()
  user!: User;

  @Output()
  onEditSuccess = new EventEmitter<any>();

  ngOnInit(): void {
  }
  
  setUser() {
    this.userService.setUser(this.user).subscribe(() => {
      alert('usuario editado com sucesso!')
      this.onEditSuccess.emit();
    }, (error) => {
      alert("erro encontrado");
      console.log(error);
    }
    );
  };
  
  open(modalContent:any) {
    this.modalService.open(modalContent).result.then((result) => {
      this.setUser(); 
    });
  }
}
