import { Component } from "@angular/core";
import { Movie } from "../movie";

@Component({
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{

title = "Movies List";
movie :Movie ={
  id:1,
  name:"Movie Name"
}
}
