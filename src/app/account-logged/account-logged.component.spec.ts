import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountLoggedComponent } from './account-logged.component';

describe('AccountLoggedComponent', () => {
  let component: AccountLoggedComponent;
  let fixture: ComponentFixture<AccountLoggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountLoggedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
