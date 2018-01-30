import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stocks'
})

export class StockPipe implements PipeTransform {
    transform(inputData: number, args:string) {
        return inputData + (args  ? args : " days");
    }
}