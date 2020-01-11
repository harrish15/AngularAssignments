import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iposts} from '../model/posts';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostsServices {
    private postsUrl:string = 'https://jsonplaceholder.typicode.com/posts';
    constructor(private http: HttpClient){}
    getPosts():Observable<Iposts>{
   return this.http.get<Iposts>(this.postsUrl);
    }
}