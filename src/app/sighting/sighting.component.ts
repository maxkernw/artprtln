import { Component, OnInit, Input } from '@angular/core';
import { Sightning } from '../sightning';

@Component({
  selector: 'app-sighting',
  templateUrl: './sighting.component.html',
  styleUrls: ['./sighting.component.scss']
})
export class SightingComponent implements OnInit {

  @Input() sighting: Sightning;
  url: string;
  image: string;
  constructor() { }

  ngOnInit() {
    const north = this.sighting.site.coordinates[1].northing;
    const east = this.sighting.site.coordinates[1].easting
    this.image = `http://api.hitta.se/image/v2/0/15/${north}:${east}?markers={%22pn%22:[${north}],%22pe%22:[${east}],%22marker%22:1}&logo={}"`
    this.url = `http://www.hitta.se/kartan/partner?mc=${north},${east}`
  }
}
