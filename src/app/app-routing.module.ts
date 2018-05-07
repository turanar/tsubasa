import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseStatsComponent } from './pages/base-stats/base-stats.component';
import { SpecialSkillsComponent } from './pages/special-skills/special-skills.component';
import {ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
  { path: '', redirectTo: '/base-stats', pathMatch: 'full' },
  { path: 'base-stats', component: BaseStatsComponent },
  { path: 'special-skills', component: SpecialSkillsComponent },
  { path: 'listing', component: ListingComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
