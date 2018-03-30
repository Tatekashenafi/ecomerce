import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, ROUTES} from '@angular/router';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
                  AppComponent,
                  ToolBarComponent,
                  HomeComponent,
                  AboutComponent
                ],
  imports: [
              BrowserModule,
              RouterModule.forRoot([
                                      {path: '', component: HomeComponent},
                                      {path: 'About', component: AboutComponent}
                                    ])
           ],
  providers: [

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
