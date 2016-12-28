import { Component, ElementRef, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'intro',
    templateUrl: 'intro.component.html',
    styleUrls: ['intro.component.css']
})

export class IntroComponent implements OnInit {

  pre: any
  name: any
  enter: any
  enter_disabled: boolean
  enter_clicked: boolean;

  // pre_top: any
  // name_top: any
  // enter_top: any

  constructor(private router: Router) {
    this.pre = document.getElementsByClassName("pre")
    this.name = document.getElementsByClassName("name")
    this.enter = document.getElementsByClassName("enter")

    // let getWindow = function(){
    //     return window.innerWidth;
    // };

    // this.pre_top = this.pre.position().top / window.innerHeight;
    // this.name_top = this.name.position().top / window.innerHeight;
    // this.enter_top = this.enter.position().top / window.innerHeight;

  }

  ngOnInit() {
    TweenMax.fromTo(this.pre, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(2)
    TweenMax.fromTo(this.name, 1, {opacity: 0, y: 20}, {opacity: 1, y: 0, ease: Power2.easeOut}).delay(3)
    TweenMax.fromTo(this.enter, .3, {opacity: 0, x: 5}, {opacity: 1, x: 0, ease: Power2.easeOut}).delay(5)
  }

  intro_close () {
    this.enter_disabled = true;
    this.enter_clicked = true;
    TweenMax.fromTo(this.pre, .7, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Power2.easeIn});
    TweenMax.fromTo(this.name, .5, {opacity: 1, y: 0}, {opacity: 0, y: -10, ease: Power2.easeIn});
    TweenMax.fromTo(this.enter, .3, {opacity: 1, x: 0}, {opacity: 0, x: -5, ease: Power2.easeIn});
    let leave_route = setTimeout(() => {
      this.router.navigate(['./menupage'])
    }, 700);
  }

}
