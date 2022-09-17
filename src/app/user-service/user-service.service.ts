import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type CreateUserRequest = {
  login: string,
  pass: string,

  name: string,
  surname: string
}

export type UserDTO = {
  id: number | null,
  login: string,

  name: string,
  surname: string
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  public getDefautUserRequest(): CreateUserRequest {
    return {
      login: "",
      pass: "",
      name: "",
      surname: ""
    }
  }

  public registerUser(createUserRequest: CreateUserRequest) : Observable<Object>{
    return this.httpClient.post("http://localhost:8080/api/user", createUserRequest);
  }
}
