import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
<div class="container">
  <a routerLink="/posts" class="btn btn-primary">Posts</a>
  <a routerLink="/cart" class="btn btn-primary">Cart</a>

  <router-outlet></router-outlet>  
</div>
  `
  // template: `<posts></posts>`
  // template:`<cart></cart>`
  // template: `<useProdServ></useProdServ>`
  // template: `<h1>List of Courses :</h1>
  
  // <ul>
  //   <li *ngFor="let course of courses">    
  //     <course [course]="course"></course>
  //   </li>
  // </ul>`
  // template: `

  //           <course [course]="course1name"></course>
  //           <course [course]="course2name"></course>
  //           <course [course]="course3name"></course>`,
})
export class AppComponent  { 
  // course1name = {name: 'Backbone', price:1000};
  // course2name = { name: 'React', price: 2000 };
  // course3name = { name: 'Angular', price: 3000 };

  courses= [{ name: 'Backbone', price: 1000 },
            { name: 'React', price: 2000 },
            { name: 'Angular', price: 3000 }];
}

// Zone.js is required for Angular to detect change detection and model binding
// Binding
// Oneway -> interpolation -  {{}}  OR property binding - [property name]
// Two-way -> 

//Directives 
//Structural Directives -> preceded by *
//e.g. ngfor

// All component class names should start with Capital letters

// CSS scoping -> limiting styles to components

// PIPES/FILTERS

// FORMS
// -> Provides validations

// Forms validation 
// Pristine - Unchanged
// Valid - 
// Invalid - 
// Dirty - Changed


// Services
// services are injected in other classes like components through constructor
// @Injectable() attribute is required if your service is using some other service. 
// This will enable injecting other services into your service
//


// Routing
//
//
//

///////////////////////
/// https://github.com/sumeetwajpe
/// https://blog.angularindepth.com/insiders-guide-into-interceptors-and-httpclient-mechanics-in-angular-103fbdb397bf
///////////////////////