import { Fish } from '../game/shared/models/fish';
import { RARITIES } from './rarities';

export const FISH: Fish[] = [
   { name: 'Boot', rarity: RARITIES[0] },
   { name: 'Seaweed', rarity: RARITIES[0] },
   { name: 'Carp', rarity: RARITIES[1] },
   { name: 'Anchovy', rarity: RARITIES[1] },
   { name: 'Clam', rarity: RARITIES[1] },
   { name: 'Tuna', rarity: RARITIES[2] },
   { name: 'Salmon', rarity: RARITIES[2] },
   { name: 'Herring', rarity: RARITIES[2] },
   { name: 'Cod', rarity: RARITIES[2] },
   { name: 'Crab', rarity: RARITIES[3] },
   { name: 'Catfish', rarity: RARITIES[3] },
   { name: 'Eel', rarity: RARITIES[4] },
   { name: 'Shark', rarity: RARITIES[5] } 
];