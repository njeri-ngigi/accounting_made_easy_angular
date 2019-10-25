import { Component, OnInit, Input } from '@angular/core';

import { imagePlaceholder } from 'src/app/utils/constants';
import { faImages, faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {
  @Input() height: string;
  @Input() width: string;

  imagePlaceholder = imagePlaceholder;
  faImages = faImages;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
  }

}
