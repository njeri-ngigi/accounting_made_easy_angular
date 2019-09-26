import { Component, OnInit } from '@angular/core';
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
  stockSizeObject = {};

  shirt = require('../../../../assets/svg/shirt.svg');
  trouser = require('../../../../assets/svg/jeans2.svg');
  jacket = require('../../../../assets/svg/jacket.svg');

  constructor() { }

  ngOnInit() {
  }

  addSizeDiv() {

  }
}
