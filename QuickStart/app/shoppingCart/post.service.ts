import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService{
    
    constructor(private httpObj:Http){

    }

    // Returning data using call back function
    // NOT RECOMMENDED - as it needs to many things to be taken care of    
    getPostsUsingCallbackFunction(callBackFunction: any){
        this.httpObj
            .get('https://jsonplaceholder.typicode.com/posts')
            .subscribe(function (response) {
                callBackFunction(response.json());
            });
    }

    // Returning data using promise function
    // Promises are supported in ES6. Not all browsers support this yet
    // So we use RxJs. This allows to add new methods to objects at runtime
    // 
    getPostsUsingPromise() {
        return this.httpObj
            .get('https://jsonplaceholder.typicode.com/posts').toPromise();
    }
}