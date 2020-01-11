import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IgithubUser } from "../model/githubUser";
import { IgithubFollower } from "../model/githubFollower";

@Injectable({ providedIn: "root" })
export class githubapiServices {
  private githubUserURL: "https://api.github.com/users/john";
  private githubUserFollowersURL: "https://api.github.com/users/john/followers";

  constructor(private http: HttpClient) {}
  getUsersData(): Observable<IgithubUser> {
    return this.http.get<IgithubUser>(this.githubUserURL);
  }
  getUserFollowerData(): Observable<IgithubFollower> {
    return this.http.get<IgithubFollower>(this.githubUserFollowersURL);
  }
}
