import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './service/component-a.component';
import { ComponentBComponent } from './service/component-b.component';
import {DataService} from './service/data.service';
import { LogService } from './service/log.service';
import {TalkService} from './service/talk.service';




@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentBComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LogService,TalkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
