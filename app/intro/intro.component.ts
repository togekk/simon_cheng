import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css']
})
export class IntroComponent {
  constructor(private elementRef: ElementRef) {
    // ngOnInit() {
    //   TweenMax.fromTo($('.pre'), 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(2);
    // }
  }
}
