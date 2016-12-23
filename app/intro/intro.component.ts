import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css']
})

export class IntroComponent implements OnInit {

  pre: any

  constructor() {
    this.pre = document.getElementsByClassName("pre")
  }

  ngOnInit() {
    TweenMax.fromTo(this.pre, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(2);
  }

}
