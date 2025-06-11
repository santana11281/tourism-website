import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoredService {
  private destinoid$ = new BehaviorSubject<number>(0);

  set destinoid(value: number) {
    this.destinoid$.next(value);
  }
  get destinoid(): number {
    return this.destinoid$.value;
  }

  // Observable to allow components to subscribe to changes
  get destinoidChanges() {
    return this.destinoid$.asObservable();
  }

  // subscribe to _destinoid changes
}
