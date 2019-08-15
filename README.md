# ngx-pdfjs

A simple component for viewing PDFs in an Angular application using [PDF.js](https://mozilla.github.io/pdf.js/).

## Usage

- `npm install pdfjs-dist`

- Add scripts to `angular.json`.

```
"scripts": [
    "node_modules/pdfjs-dist/build/pdf.min.js",
    "node_modules/pdfjs-dist/build/pdf.worker.min.js",
    ...
]
```

- Copy all files from the [`PdfViewerModule`](https://github.com/Peter554/ngx-pdfjs/tree/master/web-ui/src/app/pdf-viewer) into your project and import into your root `AppModule`.

```ts
import { PdfViewerModule } from './pdf-viewer/pdf-viewer.module';
...
imports: [..., PdfViewerModule],
```

- Use the component.

e.g.

```html
<!-- 'pdf' is some Blob we want to view -->
<div class="viewer-container">
  <app-pdf-viewer [src]="pdf" [quality]="2" width="90%" maxWidth="800px" spacerSize="0.5rem"></app-pdf-viewer>
</div>
```

```css
.viewer-container {
  display: flex;
  justify-content: center;
  background-color: #eee;
}
```

See a demo [here](https://peter554.github.io/ngx-pdfjs/).

## @Inputs

| @Input     | Type           | Required | Default | Description                                                         |
| ---------- | -------------- | -------- | ------- | ------------------------------------------------------------------- |
| src        | string or Blob | Yes      | ''      | The PDF source.                                                     |
| quality    | number         | No       | 2       | A quality factor. Higher values will look better but render slower. |
| width      | string         | No       | '100%'  | The PDF width.                                                      |
| maxWidth   | string         | No       | '800px' | The PDF max-width.                                                  |
| spacerSize | string         | No       | '0'     | The amount of space between each page.                              |
