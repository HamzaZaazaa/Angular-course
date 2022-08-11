import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";

@Injectable()
export class UserService {
    private _url: string = "https://jsonplaceholder.typicode.com/users"

    constructor(private http: HttpClient) {} 


    getUsers(): Observable<User> {
        return this.http.get<User>(this._url);
    }

    createUser(user: User): Observable<User> {
        return this.http.post<User>(this._url, user);
    }

} 