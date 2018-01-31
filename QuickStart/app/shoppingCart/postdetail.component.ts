import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'postdetail',
    template: `<h1> Post Details for : {{postId}}</h1>`
})
export class PostDetailsComponent {
    
    postId:number;

    constructor(private routeObj:ActivatedRoute){
        this.routeObj.params.subscribe( 
                                        p => this.postId = p['id']
                                    );
    }
}