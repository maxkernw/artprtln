import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sighting',
  templateUrl: './sighting.component.html',
  styleUrls: ['./sighting.component.scss']
})
export class SightingComponent implements OnInit {
  
  @Input() sighting: SightingComponent;

  constructor() { }

  ngOnInit() {
  }

}
