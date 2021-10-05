import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  addUser(user: Object):Observable<any>{
    return this.httpClient.post('https://localhost:5001/User',user);
  }

  getUsers():Observable<any>{
    return this.httpClient.get('https://localhost:5001/User');
  }

  deleteUser(userID:number):Observable<any>{
    return this.httpClient.delete('https://localhost:5001/User/'+userID);
  }

  setUser(user: User):Observable<any>{
    return this.httpClient.put('https://localhost:5001/User/'+user.usuarioId,user);
  }

}
