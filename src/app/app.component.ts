import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { HttpHeaders } from '@angular/common/http';
import { Sightning } from './sightning';
import { Response, Meta } from './response';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'artprtln';
  sightings: Sightning[];

  readonly url = '/v2/sightings?dateFrom=2018-10-01&dateTo=2018-10-02';
  readonly header = { 'Ocp-Apim-Subscription-Key': 'a1ea858711ac4f96a6f703c7b237e35f' };

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.get<Response<Sightning[], Meta>>(this.url, new HttpHeaders(this.header))
      .subscribe(response => {
        this.sightings = response.data;
      }, error => console.error(error))
  }
}
