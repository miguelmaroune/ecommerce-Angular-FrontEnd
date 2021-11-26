import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  //we need to inject the router to our constructor.
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  doSearch(value : String)
  {
    console.log(`value = ${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}