import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  standalone: true,
  templateUrl: './promise-observable.component.html',
  styleUrl: './promise-observable.component.css',
})

export class PromiseObservableComponent implements OnInit {
  // constructor(private http: HttpClient) { }
  constructor() { }
  private http = inject(HttpClient);
  promise = `
    1. Promise creation:
    - Promise is a inbuilt class from ES6 is used to handle asynchrounous calls/actions
    - Promises are always execute asynchrounously - mean even if the resolve/reject methode without a setTimeOut it will return the data asynchounously.
    - Promise has 3 methods - .then(), .catch(), .finally()
    - There can be multiple .then and .finally blocks but
    - For multiple .then blocks --> each then need to return something for next then to execute
                              --> in case of no return value available from before .then then in such case the current .then receives undefied as it call back response
    - For multiple .finally blocks --> no need to return something as it only used for cleanup/logging.
    - For multipe .catch block --> it is technically possible to add multiple catch blocks in the code but only the first .catch block wil gets execute and others will be ignored

    *****************************************
    import { HttpClient } from '@angular/common/http';
    import { Component, inject, OnInit } from '@angular/core';

    @Component({
      selector: 'app-promise-observable',
      standalone: true,
      templateUrl: './promise-observable.component.html',
      styleUrl: './promise-observable.component.css',
    })

    export class PromiseObservableComponent implements OnInit {
      // constructor(private http: HttpClient) { }
      constructor() { }
      private http = inject(HttpClient);
      
      ngOnInit() {
        this.promiseMethod();
      }

      promiseMethod() {
        // promise creation
        const promise = new Promise((res, rej) => {
          console.log("Promise Created and executed");
          res("Promise data returned") // it is always asynchronous
          // rej("rejected");
          // setTimeout(() => {
          //   console.log("Promise resolved");
          //   res("Promise data returned")
          // },5000)
        });

        console.log("before .then");
        // promise.then(data => console.log('success',data)).catch(e => console.log('error',e)); // asynchronous execution (will be executed after 5 sec/after promise resolution/error)
        // promise.then(d=>console.log(d)); // works without catch error and receive the same resolved response.
        // if we use finally we can chain further
        promise.then(data => console.log((data as string).toUpperCase())) // execute sequentially is promise resolved/success
          .then(dataUp => console.log('dataUp', dataUp)) // execute sequentially if first .then return something
          .catch(e1 => console.log('error1', e1)) // execute sequentially if promise rejected/error
          .catch(e2 => console.log('error2', e2)) // wont execute
          .finally(() => {
            //console.log("finally1 : Promise execution completed") // execute sequentially 
          }).finally(() => {
            //console.log("finally2 : Promise execution completed") // execute sequentially 
          })

        console.log("after .then");
        // we can converst https returned observable into promise and implement its methods
        this.http.get("https://jsonplaceholder.typicode.com/posts/1")
          .toPromise() 
          .then(resData => {
            // console.log("http promise", resData);
          }).catch(e => console.log(e))
          .finally(() => console.log("Finally get executed regards of promise res/rej"));

          // js library's like fetch will return a promise response
        const data = fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(data => data.json()) // fetch return a promise(data) - we should conver that promise to json using (data.json()) again it returns a promise 
        .then(data => console.log("fetchData", data)) // returned json promise will be resolved in this .then
        .catch(e => console.log(e))
        .finally(()=> console.log("finally"));
        console.log("data from fetch", data);
        this.fetchData();
      }

      async fetchData(){
          const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
          const data = await response.json();
          console.log("fetch data from async-await function", data);
      }
      

      observableMethod() {

      }
    }
    *****************************************
  `;

  observable = ``;

  ngOnInit() {
    // this.promiseMethod();
    this.observableMethod();
  }

  promiseMethod() {
    // promise creation
    const promise = new Promise((res, rej) => {
      console.log("Promise Created and executed");
      res("Promise data returned") // it is always asynchronous
      // rej("rejected");
      // setTimeout(() => {
      //   console.log("Promise resolved");
      //   res("Promise data returned")
      // },5000)
    });

    console.log("before .then");
    // promise.then(data => console.log('success',data)).catch(e => console.log('error',e)); // asynchronous execution (will be executed after 5 sec/after promise resolution/error)
    // promise.then(d=>console.log(d)); // works without catch error and receive the same resolved response.
    // if we use finally we can chain further
    promise.then(data => console.log((data as string).toUpperCase())) // execute sequentially is promise resolved/success
      .then(dataUp => console.log('dataUp', dataUp)) // execute sequentially if first .then return something
      .catch(e1 => console.log('error1', e1)) // execute sequentially if promise rejected/error
      .catch(e2 => console.log('error2', e2)) // wont execute
      .finally(() => {
        //console.log("finally1 : Promise execution completed") // execute sequentially 
      }).finally(() => {
        //console.log("finally2 : Promise execution completed") // execute sequentially 
      })

    console.log("after .then");
    // we can converst https returned observable into promise and implement its methods
    this.http.get("https://jsonplaceholder.typicode.com/posts/1")
      .toPromise()
      .then(resData => {
        // console.log("http promise", resData);
      }).catch(e => console.log(e))
      .finally(() => console.log("Finally get executed regards of promise res/rej"));

    // js library's like fetch will return a promise response
    let dataLet;
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(data => data.json()) // fetch return a promise(data) - we should conver that promise to json using (data.json()) again it returns a promise 
      .then(data => {
        console.log("fetchData_dataLet", data);
        dataLet = data
      }) // returned json promise will be resolved in this .then
      .catch(e => console.log(e))
      .finally(() => console.log("finally"));
    console.log("data from fetch dataLet", dataLet);
    this.fetchData();
  }

  // async await always execute in synchrounous mode - it wait until async response and move further
  async fetchData() {
    try{
      console.log("before async function");
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      console.log("after async1 function start", response);
      const data = await response.json();
      console.log("after async1 function ends",response,data);
      console.log("fetch data from async-await function", data);
    } catch(e){
      console.log(e);
    }
  }


  observableMethod() {
    // observables are the type of data steams (http res, fromEvent, of, interval, customObservables, reactiveForms, routing, stateMangmnt, webSockets, etc.)
    // cold observables
      // http response, of , interval, custom
      // observable source code will gets exected from the start for each subscription
      // each subscriber gets all the data (all streams) whether the subscriber subscription made late or early
    console.log("**********************************************");
    const cold$ = new Observable((observer) => {
      console.log("cold Observable created");
      observer.next("Value 1"),
      observer.next("Value 2"),
      observer.next("Value 3"),
      observer.next("Value 4")
      // observer.error(),
      // observer.complete()
    });

    console.log("Before Subscription");
    // subscription1
    cold$.subscribe(data => console.log("subscription1", data));
    // cold$.subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: ()=> console.log("completed")
    // });

    // subscription2
    cold$.subscribe(data => console.log("subscription2", data));
    

    // hot observables
      // subjects, fromEvents, StateMngmt, Websocket, custom
      // hot observable emit the date irrespective of subscription
      // if an observer subscribe the observable late mean it misses the previously emited stream
  }
}
