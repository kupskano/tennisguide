import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartpackDetailsPage } from './startpack-details.page';

describe('StartpackDetailsPage', () => {
  let component: StartpackDetailsPage;
  let fixture: ComponentFixture<StartpackDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartpackDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartpackDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
