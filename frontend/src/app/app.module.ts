import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';





const appRoutes: Routes = [

  {path: 'home', component:HomePageComponent},
   {path: '', component:LoginComponent},
  {path: 'project', component:ProjectPageComponent},
  {path: 'task', component:MyTasksComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    ProjectPageComponent,
    MyTasksComponent,

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
