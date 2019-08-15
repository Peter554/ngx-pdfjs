import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private readonly _http: HttpClient) {
    this._loadPdf();
  }

  public pdf: Blob | undefined;

  private async _loadPdf(): Promise<void> {
    this.pdf = await this._http.get('assets/demo.pdf', { responseType: 'blob' }).toPromise();
  }
}
