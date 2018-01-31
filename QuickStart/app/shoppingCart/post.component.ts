import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
    selector: 'posts',
    //templateUrl: 'posts.component.html'
    template:`
    <h1> Posts </h1>
    <ul>
        <li *ngFor="let post of posts">
            {{post.title}}
        </li>
    </ul>
    
    `,
    providers:[PostService]
})

export class PostsComponent {

    posts:any;

    // Use Arrow function in case of call back functions istead for anonymous functions.
    // Anonymous functions lose the cotext of the component object.
    constructor(private postService:PostService) { 
        // this.postService.getPostsUsingCallbackFunction(
        //     (data:any) => 
        //     {
        //         console.log("Received data from getPostsUsingCallbackFunction:");
        //         console.log(data);
        //         this.posts = data;
        //     }
        // );

        let aPromise = this.postService.getPostsUsingPromise();
        aPromise.then(            
            (response) => {
                console.log("Received data from getPostsUsingPromise:");
                this.posts = response.json();
            },
            (err) => {
                console.log(err);
            });
    }
}