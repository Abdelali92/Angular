import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  salutationSub : Subscription;
  compteurObsSub : Subscription;
  secondes : number;

  constructor() { }

  ngOnInit(): void {



    const compteurObs = interval(1000);


    this.compteurObsSub = compteurObs.subscribe(
      (value : number) => {
        this.secondes = value;
        console.log(value);},

    );


  }

  ngOnDestroy(){

    this.compteurObsSub.unsubscribe();
    this.salutationSub.unsubscribe();

  }

}
