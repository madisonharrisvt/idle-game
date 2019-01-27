import { Component, OnInit, Input } from '@angular/core';
import { transition, animate, trigger, state, style } from '@angular/animations';
import { FISH } from 'src/app/constants/fish';
import { Fish } from 'src/app/game/shared/models/fish';
import { StorageService } from '../shared/services/storage/storage.service';
import { RARITIES } from 'src/app/constants/rarities';
import { Rarity } from '../shared/models/rarity-interface';

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.component.html',
  styleUrls: ['./fishing.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 100
      })),
      transition('initial=>final', animate(500)),
      transition('final=>initial', animate(500))
    ])],
})
export class FishingComponent implements OnInit {

  @Input() childMessage: string;

  fishCount: number = 0;
  availableFish: Fish[] = FISH;
  rarities: Rarity[] = RARITIES;
  caughtFish: string = '';
  currentState: string = 'initial';
  color: string = '';

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    
  }

  fish() {
    this.fishCount++;
    var rng = Math.floor(Math.random() * 1000);
    var selectedRarity = this.rarities[0];
    this.rarities.forEach(rarity => {
      if (rng < rarity.value) {
        selectedRarity = rarity;
      }
    });

    var fishWithRarity = this.availableFish.filter(af => af.rarity.value == selectedRarity.value);
    var randomIndex = Math.floor(Math.random() * fishWithRarity.length);
    var caughtFish = fishWithRarity[randomIndex];
    this.caughtFish = caughtFish.name;
    this.color = caughtFish.rarity.color;

    this.storageService.updateFish(caughtFish);

    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    setTimeout(() => {
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    }, 1000);
  }
}
