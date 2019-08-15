import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, PdfViewerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
