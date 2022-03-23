import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
experiments = ['Mars soil sample', 'Plant growth in habitat', 'Human bone density'];
  constructor() { }

  ngOnInit(): void {
  }

}
