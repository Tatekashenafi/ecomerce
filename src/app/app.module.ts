import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, ROUTES} from '@angular/router';

import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
                  AppComponent,
                  ToolBarComponent,
                  HomeComponent,
                  AboutComponent,
                  LinkComponent,
                  LoginComponent
                ],
  imports: [
              BrowserModule,
              RouterModule.forRoot([
                                      {path: '', component: HomeComponent},
                                      {path: 'Home', component: HomeComponent},
                                      {path: 'About', component: AboutComponent},
                                      {path: 'Links', component: LinkComponent}
                                    ])
           ],
  providers: [

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
