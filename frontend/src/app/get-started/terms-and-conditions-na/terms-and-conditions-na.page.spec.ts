import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TermsAndConditionsNAPage } from './terms-and-conditions-na.page';

describe('TermsAndConditionsNAPage', () => {
  let component: TermsAndConditionsNAPage;
  let fixture: ComponentFixture<TermsAndConditionsNAPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsNAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsNAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
