import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members = [
    {
      name: "David Tran",
      job: "Full-Stack Developer"
    },
    {
      name: "Jay Boucher",
      job: "Full-Stack Developer"
    },
    {
      name: "Hoang Dang",
      job: "Full-Stack Developer"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
