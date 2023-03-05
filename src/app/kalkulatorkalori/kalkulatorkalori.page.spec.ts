import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalkulatorkaloriPage } from './kalkulatorkalori.page';

describe('KalkulatorkaloriPage', () => {
  let component: KalkulatorkaloriPage;
  let fixture: ComponentFixture<KalkulatorkaloriPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KalkulatorkaloriPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalkulatorkaloriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
