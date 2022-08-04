import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrivacyPolicyNAPage } from './privacy-policy-na.page';

describe('PrivacyPolicyNAPage', () => {
  let component: PrivacyPolicyNAPage;
  let fixture: ComponentFixture<PrivacyPolicyNAPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyNAPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrivacyPolicyNAPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
