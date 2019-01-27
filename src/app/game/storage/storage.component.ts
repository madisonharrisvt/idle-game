import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/services/storage/storage.service';
import { Fish } from '../shared/models/fish';
import { FishBox } from '../shared/models/fish-box';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  fishStorage: Array<FishBox> = new Array<FishBox>();

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.currentFish.subscribe(fish => {
      if (fish != null) {
        var fishInStorage = this.fishStorage.find(f => f.fish.name == fish.name);
        if (fishInStorage == undefined) {
          var fishBox: FishBox = { fish: fish, count: 0 };
          this.fishStorage.push(fishBox);
        }
        else {
          fishInStorage.count++;
        }
      }
    })
  }

}
