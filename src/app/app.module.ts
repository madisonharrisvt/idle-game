import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatChipsModule, MatTabsModule, MatListModule, MatGridListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FishingComponent } from './game/fishing/fishing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameComponent } from './game/game.component';
import { StorageComponent } from './game/storage/storage.component';

@NgModule({
  declarations: [
    AppComponent,
    FishingComponent,
    GameComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
