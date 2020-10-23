import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourtPage } from './court.page';

describe('CourtPage', () => {
  let component: CourtPage;
  let fixture: ComponentFixture<CourtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
