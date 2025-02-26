import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  movies:any;
  constructor(private http:HttpClient){
  }
  ngOnInit():void
  {
    this.getmovies();
  }
  getmovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies) =>{
      this.movies=movies;
      console.log(this.movies)
    });
  }
}
