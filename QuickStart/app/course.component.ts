import { Component, Input } from '@angular/core';
//import { Input } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'course',
    template: '<h1>{{courseName}}</h1>'
})
export class CourseComponent {
    
    @Input('name') courseName: string = 'Angular';
}