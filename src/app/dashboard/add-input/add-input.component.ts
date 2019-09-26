import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.scss']
})
export class AddInputComponent implements OnInit {
  @Input() width: '120px';
  @Input() label: string;
  @Input() displayInput = true;
  @Output() inputChanged = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  emitChange(value) {
    this.inputChanged.emit(value);
  }
}
