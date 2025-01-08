import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-observable',
  standalone: true,
  templateUrl: './promise-observable.component.html',
  styleUrl: './promise-observable.component.css'
})
export class PromiseObservableComponent implements OnInit {
  constructor(){}

  ngOnInit(){
    this.promiseMethod();
  }

  promiseMethod(){
    // promise creation
    const promise = new Promise((res,rej) => {
        console.log("Promise Created and executed");
        setTimeout(() => {
          console.log("Promise resolved");
          res("Promise data returned")
        },5000)
    });

    console.log("before .then");
    promise.then(data => console.log(data)).catch(e => console.log(e)); // asynchronous execution (will be executed after 5 sec/after promise resolution/error)
    promise.then(d=>console.log(d)); // works without catch error and receive the same resolved response.
    console.log("after .then");
  }

  observableMethod(){

  }
}
