import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

            <course [course]="course1name"></course>
            <course [course]="course2name"></course>
            <course [course]="course3name"></course>`,
})
export class AppComponent  { 
  course1name = {name: 'Backbone', price:1000};
  course2name = { name: 'React', price: 2000 };
  course3name = { name: 'Angular', price: 3000 };
}

// Zone.js is required for Angular to detect change detection and model binding
// Binding
// Oneway -> interpolation -  {{}}  OR property binding - [property name]