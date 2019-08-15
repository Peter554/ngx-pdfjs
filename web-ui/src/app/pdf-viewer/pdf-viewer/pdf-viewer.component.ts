import { Component, Input, OnChanges, HostBinding } from '@angular/core';

// Declare pdfjs - included in angular.json > scripts
declare const pdfjsLib: any;

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnChanges {
  private _src = '';
  private _pages: any[] = [];

  @Input()
  public spacerSize = '0';

  @HostBinding('style.width')
  @Input()
  public width = '100%';

  @HostBinding('style.max-width')
  @Input()
  public maxWidth = '800px';

  @Input()
  public quality = 2;

  public get src(): any {
    return this._src;
  }

  /**
   * Expects a string (e.g. 'assets/foo.pdf') or a Blob
   */
  @Input()
  public set src(value: any) {
    try {
      if (!value) {
        this._src = '';
      } else if (typeof value === typeof 'string') {
        this._src = value;
      } else {
        this._src = URL.createObjectURL(value);
      }
    } catch {
      this._src = '';
    }
  }

  public get pages(): any[] {
    return this._pages;
  }

  public ngOnChanges(): void {
    this._updatePages();
  }

  private async _updatePages(): Promise<void> {
    if (!this.src) {
      return;
    }

    try {
      const loading = pdfjsLib.getDocument(this.src);
      const pdf = await loading.promise;
      const numPages = pdf.numPages;

      const pages = [];

      for (let i = 0; i < numPages; i++) {
        const page = await pdf.getPage(i + 1);
        pages.push(page);
      }

      this._pages = pages;
    } catch {
      this._pages = [];
    }
  }
}
