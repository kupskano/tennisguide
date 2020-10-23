import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtiquettePage } from './etiquette.page';

describe('EtiquettePage', () => {
  let component: EtiquettePage;
  let fixture: ComponentFixture<EtiquettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtiquettePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtiquettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
