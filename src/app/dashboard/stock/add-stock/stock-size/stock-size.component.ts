import { Component, OnInit, ElementRef } from '@angular/core';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stock-size',
  templateUrl: './stock-size.component.html',
  styleUrls: ['./stock-size.component.scss']
})
export class StockSizeComponent implements OnInit {
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  subDivsObject = { 0: {}};
  selectedDivIndex = 0;
  count = 1;
  errorMessage: string;
  size: string;


  constructor(private element: ElementRef) { }

  ngOnInit() {}

  addEntry(indexString, type, input) {
    const index = parseInt(indexString, 10);
    const inputValue = input.toLowerCase();
    this.subDivsObject[index] ?
      this.subDivsObject[index][type] = inputValue :
      this.subDivsObject[index] = { [type]: inputValue };
  }

  generateColorDivArray() {
    return Object.keys(this.subDivsObject);
  }

  getLastItemOfArray() {
    const arr = this.generateColorDivArray();
    return arr[arr.length - 1];
  }

  checkForDuplicateColors(index, colorValue) {
    const subDivsObjectCopy = { ...this.subDivsObject };
    delete subDivsObjectCopy[index];
    return Object.entries(subDivsObjectCopy).filter((items) => {
      const { color } = items[1];
      return colorValue === color;
    });
  }

  addColorDiv(indexString: string) {
    this.errorMessage = undefined;
    const index = parseInt(indexString, 10);
    if (this.subDivsObject[index]) {
      const { color = '', quantity = '' } = this.subDivsObject[index];
      if (color.trim() && quantity.trim()) {
        const [divArray] = this.checkForDuplicateColors(indexString, color.trim());
        if (divArray) {
          const inputEl = this.element.nativeElement.querySelector(`#color-input-${divArray[0]} .input`);
          inputEl.classList.add('danger');
          this.errorMessage = '*color already exists';
          setTimeout(() => {
            inputEl.classList.remove('danger');
          }, 2000);
        } else {
          this.subDivsObject[this.count] = {};
          this.count++;
        }
      }
    }
  }

  removeColorDiv(index: number) {
    delete this.subDivsObject[index];
    this.selectedDivIndex = parseInt(this.getLastItemOfArray(), 10);
  }
}
