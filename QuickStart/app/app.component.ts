import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <course name="ReactJS"></course>
             <course name="NodeJS"></course>
             <course></course>`,
})
export class AppComponent  { name = 'Angular'; }

// Zone.js is required for Angular to detect change detection and model binding
