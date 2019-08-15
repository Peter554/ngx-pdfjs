import { Component, OnInit, ElementRef, ViewChild, Input, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'app-page-viewer',
  templateUrl: './page-viewer.component.html',
  styleUrls: ['./page-viewer.component.scss']
})
export class PageViewerComponent implements OnChanges {
  @ViewChild('canvas', { static: true })
  public canvasRef!: ElementRef;

  @HostBinding('style.padding-top')
  @Input()
  public paddingTop = '0';

  @HostBinding('style.width')
  @Input()
  public width = '100%';

  @HostBinding('style.max-width')
  @Input()
  public maxWidth = '800px';

  @Input()
  public quality = 2;

  @Input()
  public page: any = undefined;

  public get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  public get canvasContext(): CanvasRenderingContext2D {
    return this.canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public ngOnChanges(): void {
    this._render();
  }

  private async _render(): Promise<any> {
    if (!this.page) {
      return;
    }

    const viewport = this.page.getViewport({ scale: this.quality });
    this.canvas.width = viewport.width;
    this.canvas.height = viewport.height;

    await this.page.render({
      canvasContext: this.canvasContext,
      viewport
    });
  }
}
