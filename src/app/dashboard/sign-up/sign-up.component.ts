import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private modalService: NgbModal, private userService: UserService) { }
  
  @Output()
  onCreateSuccess = new EventEmitter<any>();

  User = {
    nome: "",
    dataNascimento: null,
    email: "",
    senha: "",
    sexoId: null,
    ativo: true
  }


  ngOnInit(): void {

  }

  signUp() {
    this.userService.addUser(this.User).subscribe(() => {
      alert('usuario cadastrado com sucesso!')
      this.onCreateSuccess.emit();
    }, (error) => {
      alert("erro encontrado");
      console.log(error);
    }
    );
  };

  open(modalContent:any) {
    this.modalService.open(modalContent).result.then((result) => {
      this.signUp(); 
    });
  }

}
