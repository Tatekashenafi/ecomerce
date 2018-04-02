import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, ROUTES} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
                  AppComponent,
                  ToolBarComponent,
                  HomeComponent,
                  AboutComponent,
                  LinkComponent,
                  LoginComponent,
                  FooterComponent
                ],
  imports: [
              BrowserModule,
              NgbModule.forRoot(),
              FormsModule,
              ReactiveFormsModule,
              RouterModule.forRoot([
                                      {path: '', component: HomeComponent},
                                      {path: 'Home', component: HomeComponent},
                                      {path: 'Logins', component: LoginComponent},
                                      {path: 'About', component: AboutComponent},
                                      {path: 'Links', component: LinkComponent}
                                    ])
           ],
  providers: [

              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
