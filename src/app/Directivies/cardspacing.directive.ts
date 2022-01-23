import { Directive, HostListener } from '@angular/core';


@Directive({
  selector: '[appCardspacing]'
})
export class CardspacingDirective {

  constructor() { }

  @HostListener('input',['$event'])
  keyup(event:any) {
    var input = event.target

    var trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substr(0, 15);
    }

    var numbers = [];
    for (var i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
 
}
