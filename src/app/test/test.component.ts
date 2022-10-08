import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BACKEND_BASE_URL } from '../model/constants';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  call(type: string) {
    this.httpClient.get(BACKEND_BASE_URL + "test/" + type)
      .subscribe({
        next: (data) => {
          console.log("Success")
          console.log(data)
        },
        error: (error) => {
          console.log("Error")
          console.log(error)
        }
      })
  }

  callPublic() {
    console.log("Call Public")
    this.call("public");
  }

  callAnyone() {
    console.log("Call Anyone")
    this.call("anyone");
  }

  callModerator() {
    console.log("Call Moderator")
    this.call("moderator");
  }
  callAdmin() {
    console.log("Call Admin")
    this.call("admin");
  }
}
