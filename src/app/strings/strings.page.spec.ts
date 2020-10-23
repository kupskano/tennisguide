import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StringsPage } from './strings.page';

describe('StringsPage', () => {
  let component: StringsPage;
  let fixture: ComponentFixture<StringsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StringsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
