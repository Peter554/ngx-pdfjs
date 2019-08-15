# ngx-pdfjs

A dead simple component for viewing PDFs in an Angular application using [pdf.js](https://mozilla.github.io/pdf.js/).

## Usage

- `npm install pdfjs-dist`

- Add scripts to `angular.json`

```
"scripts": [
    "node_modules/pdfjs-dist/build/pdf.min.js",
    "node_modules/pdfjs-dist/build/pdf.worker.min.js",
    ...
]
```

- Copy all files from the [`PdfViewerModule`]() into your project and import into your root `AppModule`

- Use the component

e.g.

```html
<div class="viewer-container">
  <app-pdf-viewer [src]="pdf" spacerSize="0.5rem" width="90%" maxWidth="800px" [quality]="2"></app-pdf-viewer>
</div>
```

```css
.viewer-container {
  display: flex;
  justify-content: center;
  background-color: #eee;
}
```

## @Input


