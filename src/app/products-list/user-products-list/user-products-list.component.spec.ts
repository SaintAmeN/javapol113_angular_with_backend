import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsListComponent } from './user-products-list.component';

describe('UserProductsListComponent', () => {
  let component: UserProductsListComponent;
  let fixture: ComponentFixture<UserProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
