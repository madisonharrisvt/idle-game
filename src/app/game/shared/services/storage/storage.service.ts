import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fish } from '../../models/fish';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private defaultFish: Fish = null;
  private fishSource = new BehaviorSubject(this.defaultFish);
  currentFish = this.fishSource.asObservable();

  constructor() { }

  updateFish(fish: Fish) {
    this.fishSource.next(fish);
  }
}
