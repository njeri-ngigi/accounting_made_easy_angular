import { Component, OnInit, ElementRef } from '@angular/core';
import { faTshirt, faSocks, faPlus } from '@fortawesome/free-solid-svg-icons';
import { imagePlaceholder } from 'src/app/utils/constants';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})
export class AddStockComponent implements OnInit {
  faTShirt = faTshirt;
  faSocks = faSocks;
  faPlusCircle = faPlus;
  imagePlaceHolder = imagePlaceholder;
  stockSizeObject = {0: {}};
  count = 1;
  errorMessage: string;

  shirt = require('../../../../assets/svg/shirt.svg');
  trouser = require('../../../../assets/svg/jeans2.svg');
  jacket = require('../../../../assets/svg/jacket.svg');

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  generateSizeArray() {
    return Object.keys(this.stockSizeObject);
  }

  updateStockSizeObject(index, sizeObject) {
    this.stockSizeObject[index] = sizeObject;
  }

  validateStockSizeObject() {
    this.errorMessage = undefined;
    Object.entries(this.stockSizeObject).map(([key, values]) => {
      if (Object.values(values).length < 1) {
        const el = this.element.nativeElement.querySelector(`#app-stock-size-${key}`);
        el.classList.add('flash-danger');
        setTimeout(() => el.classList.remove('flash-danger'), 2000);
        this.errorMessage = '*some fields are incorrect';
        // make the child component display the errors
      }
    });
  }

  addSizeDiv() {
    // TODO: make heights of hover on cards min in px
    // TODO: make overflow in cards scroll/auto
    this.validateStockSizeObject();
    if (!this.errorMessage) {
      this.stockSizeObject[this.count] = {};
      this.count++;
    }
  }
}
