import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, DatepickerComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
