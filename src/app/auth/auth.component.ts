import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  infos: any = []

  constructor() { }

  ngOnInit(): void {
    this.infos = [
    { name: "hamza", hobbies: "football" },
    { name: "baha", hobbies: "tft" },
    { name: "ilyes", hobbies: "music" }]


  }
}
