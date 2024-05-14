import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponentComponent } from './common-components/header-component/header-component.component';
import { ImageUploaderComponent } from './common-components/image-uploader/image-uploader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    ImageUploaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
