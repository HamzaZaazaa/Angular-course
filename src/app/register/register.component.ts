import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user-service';
import { User } from '../models/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })
  languageMapping: Map<Number, String> = new Map([
    [1, "en"],
    [2, "fr"]
  ]);
  languageMapping2: any = { 1: "en", 2: "fr" };
  users: User[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((returnedData : any) => {
       this.users = returnedData
    });
  }
  onSubmit() {
    const user = this.register.getRawValue() as User;
    this.userService.createUser(user).subscribe({
      next: u => console.log(u),
      error: err => console.log(err),
    });
  }
}
// Observables can return more than one value with "subscribe" unlike functions that return one value
// observable example
// const observable = new Observable(function subscribe(subscriber) {
//   try {
//     subscriber.next(console.log(1));  //got value 1
//     subscriber.next(console.log(2));  // got value 2
//     subscriber.next(console.log(3));  // got value 3
//     subscriber.complete()             // completed
//     subscriber.next(console.log(4))   // this value won't be printed 
//   } catch (error) {
//     subscriber.error(error)
//   }
// })
