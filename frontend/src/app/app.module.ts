import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProjectManagerPageComponent } from './project-manager-page/project-manager-page.component';
import { TesterPageComponent } from './tester-page/tester-page.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { LoginComponent } from './login/login.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { PrimerComponent } from './primer/primer.component';




const appRoutes: Routes = [

  {path: 'home', component:HomePageComponent},
  {path: 'admin', component:AdminPageComponent},
  {path: 'pm', component:ProjectManagerPageComponent},
  {path: 'dev', component:DeveloperPageComponent},
  {path: 'test', component:TesterPageComponent},
  {path: '', component:LoginComponent},
  {path: 'createp', component:ProjectPageComponent},
  {path: 'pr', component:PrimerComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminPageComponent,
    ProjectManagerPageComponent,
    TesterPageComponent,
    DeveloperPageComponent,
    LoginComponent,
    ProjectPageComponent,
    PrimerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
