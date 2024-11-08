import { Injectable } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import html2canvas from 'html2canvas';
@Injectable({ providedIn: 'root' })
export class AppService {
  onClick(amount: number, name: string) {
    document.querySelector('.amount')!.innerHTML = '₹' + amount;
    document.querySelector('.amount-detail')!.innerHTML = '₹' + amount;
    // document.getElementById('name')!.innerHTML = name;
    let element = document.getElementById('abc');
    if (element) {
      html2canvas(element, { allowTaint: true })
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');

          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'captured-image.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => {
          console.error('Error generating image:', error);
        });
    } else {
      console.error('Element not found');
    }
  }
}
