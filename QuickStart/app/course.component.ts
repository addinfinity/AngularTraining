import { Component, Input } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'course',
    template: `<h1>{{course.name}}</h1>
                <h2>Price: {{course.price}}</h2>`
})
export class CourseComponent {
    
    @Input('course') course: any = {};
}