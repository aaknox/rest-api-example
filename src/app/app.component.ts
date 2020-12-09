import { Component, VERSION } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: any;

  constructor(private http: HttpClient) {}

  //methods
  getPosts() {
    this.posts = this.http.get(this.ROOT_URL + "/posts");
  }
}
