import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiComponent } from './comp/pi/pi.component';
import { Pips1Pipe } from './pips1.pipe';
import { Pips2Pipe } from './pips2.pipe';
import { Pips3Pipe } from './pips3.pipe';
import { Pips4Pipe } from './pips4.pipe';
import { Pips5Pipe } from './pips5.pipe';
import { Pips6Pipe } from './pips6.pipe';
import { Pips7Pipe } from './pips7.pipe';
import { Pips8Pipe } from './pips8.pipe';
import { Pips9Pipe } from './pips9.pipe';
import { Pips10Pipe } from './pips10.pipe';
import { Pips11Pipe } from './pips11.pipe';
import { Pips12Pipe } from './pips12.pipe';
import { DirectivComponent } from './comp/directiv/directiv.component';
import { D1Directive } from './direct/d1.directive';
import { D2Directive } from './direct/d2.directive';
import { D3Directive } from './direct/d3.directive';
import { D4Directive } from './direct/d4.directive';
import { D5Directive } from './direct/d5.directive';
import { D6Directive } from './direct/d6.directive';
import { D7Directive } from './direct/d7.directive';
import { D8Directive } from './direct/d8.directive';

@NgModule({
  declarations: [
    AppComponent,
    PiComponent,
    Pips1Pipe,
    Pips2Pipe,
    Pips3Pipe,
    Pips4Pipe,
    Pips5Pipe,
    Pips6Pipe,
    Pips7Pipe,
    Pips8Pipe,
    Pips9Pipe,
    Pips10Pipe,
    Pips11Pipe,
    Pips12Pipe,
    DirectivComponent,
    D1Directive,
    D2Directive,
    D3Directive,
    D4Directive,
    D5Directive,
    D6Directive,
    D7Directive,
    D8Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
     ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
