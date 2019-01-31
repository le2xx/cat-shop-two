import {Component} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pack} from './commons/interfaces/pack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  packages: Pack[];
  json = 'assets/json/packages.json';

  constructor(private http: HttpClient) {
    this.http.get(this.json).subscribe(
      data => this.packages = data['packages'] as Pack[],
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
