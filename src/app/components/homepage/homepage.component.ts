import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  data:any={};
  ngOnInit(): void {
    this.activatedRoute.data.forEach(
      d => this.data = d
    );
  }

}
