import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HomeComponent } from './Home.component';
import {routing} from './app.route';
import { ParaComponent } from './para/para.component';
import { ChildComponent } from './child/child.component';
import { ChildEditComponent } from './child/child-edit.component';
import { ChildDetailComponent } from './child/child-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    HomeComponent,
    ParaComponent,
    ChildEditComponent,
    ChildComponent,
    ChildEditComponent,
    ChildDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
