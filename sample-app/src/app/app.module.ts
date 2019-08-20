import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleListComponent } from './samplelist/samplelist.component';
import { SampledetailComponent } from './sampledetail/sampledetail.component';
import { SampleService } from './sample.service';


@NgModule({
  declarations: [
    AppComponent,
    SampleListComponent,
    SampledetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
