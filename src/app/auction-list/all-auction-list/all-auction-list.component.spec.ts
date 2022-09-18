import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAuctionListComponent } from './all-auction-list.component';

describe('AllAuctionListComponent', () => {
  let component: AllAuctionListComponent;
  let fixture: ComponentFixture<AllAuctionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAuctionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
