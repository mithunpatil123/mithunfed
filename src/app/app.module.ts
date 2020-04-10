import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import { OddPipe } from './odd.pipe';
import { HelloComponent } from './hello/hello.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule, SharedModule],
  declarations: [ AppComponent, OddPipe, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
