import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RacquetPage } from './racquet.page';

describe('RacquetPage', () => {
  let component: RacquetPage;
  let fixture: ComponentFixture<RacquetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacquetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RacquetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
