import { Component, OnInit } from '@angular/core';

const TEAM_MEMBERS = [
  {
    name: "David Tran",
    job: "Full-Stack Developer",
    photo: 'assets/david_photo.jpg'
  },
  {
    name: "Jay Boucher",
    job: "Full-Stack Developer",
    photo: 'assets/jay_photo.jpg'
  },
  {
    name: "Hoang Dang",
    job: "Full-Stack Developer",
    photo: 'assets/hoang_photo.jpg'
  }
]


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members = TEAM_MEMBERS;
  constructor() { }

  ngOnInit(): void {
  }

}
