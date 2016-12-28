import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent }  from './intro/intro.component';
import { MenuPageComponent }  from './menupage/menupage.component';
import { TravelComponent }  from './travel/travel.component';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'menupage', component: MenuPageComponent },
  { path: 'travel', component: TravelComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  declarations: [
    IntroComponent,
    MenuPageComponent,
    TravelComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
