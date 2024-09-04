import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from 'primeng/fileupload';
import { HeaderComponentComponent } from './common-components/header-component/header-component.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageUploaderComponent } from './common-components/image-uploader/image-uploader.component';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    ImageUploaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    HttpClientModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
