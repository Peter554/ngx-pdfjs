import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PageViewerComponent } from './page-viewer/page-viewer.component';

@NgModule({
  declarations: [PdfViewerComponent, PageViewerComponent],
  imports: [CommonModule],
  exports: [PdfViewerComponent]
})
export class PdfViewerModule {}
