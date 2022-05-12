import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {jsPDF} from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-document-fiche',
  templateUrl: './document-fiche.component.html',
  styleUrls: [ './document-fiche.component.css' ]
})
export class DocumentFicheComponent implements OnInit {

  constructor() { }

  name = 'Angular Html To Pdf ';


  @ViewChild('pdfTable') pdfTable: ElementRef;

  // public downloadAsPDF() {
  //   const doc = new jsPDF();
  //
  //   const pdfTable = this.pdfTable.nativeElement;
  //
  //   var html = htmlToPdfmake(pdfTable.innerHTML);
  //
  //   const documentDefinition = {content: html};
  //   pdfMake.createPdf(documentDefinition).open();
  //
  // }


  public download(){
    const printContent = document.getElementById("pdfTable");
    const WindowPrt = window.open('','','left=0,padding=20,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write('<link rel="stylesheet" type="text/css" href="document-fiche.component.css">');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();
    WindowPrt.close();
  }

  ngOnInit(): void {
  }
}
