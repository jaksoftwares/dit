'use client';

import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div className="w-full h-full overflow-auto bg-white p-4">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        className="w-full flex flex-col items-center"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={800}
            className="mb-4 shadow-md border rounded"
          />
        ))}
      </Document>

      <a
        href={url}
        download
        className="mt-6 inline-block bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
      >
        Download Course Outline
      </a>
    </div>
  );
}
