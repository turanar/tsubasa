import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatsResultComponent } from './player-stats-result.component';

describe('PlayerStatsResultComponent', () => {
  let component: PlayerStatsResultComponent;
  let fixture: ComponentFixture<PlayerStatsResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatsResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatsResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
