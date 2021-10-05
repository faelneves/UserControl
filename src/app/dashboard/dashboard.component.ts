import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  users!: User[];

  nome: string = "";
  ativo: boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(response =>{
      this.users = response;
    })
  }
  
  filter(){
    this.userService.getUsers().subscribe(response =>{
      this.users = response;
      this.users = this.users.filter((user) => {
        if(user.nome.indexOf(this.nome) <= -1)
          return false;
        return user.ativo == this.ativo
      });
    })
  }
 
  formatDate(date:string){
    let formatDate = new Date(date);
    return formatDate.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  }

  formatAtivo(ativo:boolean){
    return ativo == true ? "Ativo" : "Inativo";
  }

  formatSexo(sexo:number){
    return sexo == 1 ? "Masculino":"Feminino";
  }

}
