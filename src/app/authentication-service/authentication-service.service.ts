import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BACKEND_BASE_URL } from '../model/constants';
import { AuthenticationRequest, UserDTO } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {
  authorizationHeader: string | null = null;
  loggedInUser: UserDTO | null = null;

  loggingIn: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router) {
  }

  authenticate(request: AuthenticationRequest): void {
    this.loggingIn = true;

    this.httpClient.post<UserDTO>("http://localhost:8080/login", request,
      {
        observe: 'response',
        withCredentials: false
      })
      .subscribe({
        next: (data) => {
          console.log("Success logging in!")
          const authorizationHeader = data.headers.get('Authorization');
          // Bearer:tokenik_tokenik_tokenik
          this.authorizationHeader = authorizationHeader;

          this.loggedInUser = data.body;
          console.log(this.loggedInUser)

          this.loggingIn = false;
          this.router.navigate(['/test'])
        },
        error: (error) => {
          console.log('Error logging in: ')
          console.log(error)
          this.authorizationHeader = null;
          this.loggedInUser = null;

          this.loggingIn = false;
        }
      })
  }
}
