import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent }  from './intro/intro.component';
import { MenuComponent }  from './menu/menu.component';
import { TravelComponent }  from './travel/travel.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'intro', component: IntroComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    IntroComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
