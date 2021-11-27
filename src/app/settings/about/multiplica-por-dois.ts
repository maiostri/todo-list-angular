import { Pipe, PipeTransform } from "@angular/core";


@Pipe({ name: 'multiplicaPorDois'})
export class MultiplicaPorDois implements PipeTransform {
    
    transform(value: number, ...args: any[]): number {
        return value * 2;
    }
}