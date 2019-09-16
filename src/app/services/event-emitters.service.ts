import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmittersService {
  emitSingleStock = new EventEmitter();
}