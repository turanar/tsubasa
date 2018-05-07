import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { Hammer } from 'hammerjs/hammer';
import { HammerGestureConfig } from './myhammer';
import {PlayerStatsComponent} from './player-stats/player-stats.component';
import { PlayerStatsResultComponent } from './player-stats-result/player-stats-result.component';
import { AppRoutingModule } from './/app-routing.module';
import { BaseStatsComponent } from './pages/base-stats/base-stats.component';
import { SpecialSkillsComponent } from './pages/special-skills/special-skills.component';
import { CovalentLayoutModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentStepsModule} from '@covalent/core';
import {MatIconModule, MatListModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatSlideToggleModule} from '@angular/material';
import { ListingComponent } from './pages/listing/listing.component';
import {PlayerListService} from './player-list.service';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20, direction: 6},
    'pan':   {direction: 6, threshold: 0}
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PlayerStatsComponent,
    PlayerStatsResultComponent,
    BaseStatsComponent,
    SpecialSkillsComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LocalStorageModule,
    MatIconModule,
    MatListModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [PlayerListService, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
