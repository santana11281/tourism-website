import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoredService {
  private _destinoid: number = 0;

  get destinoid(): number {
    return this._destinoid;
  }

  set destinoid(value: number) {
    this._destinoid = value;
  }
}