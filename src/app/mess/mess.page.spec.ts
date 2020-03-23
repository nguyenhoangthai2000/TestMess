import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessPage } from './mess.page';

describe('MessPage', () => {
  let component: MessPage;
  let fixture: ComponentFixture<MessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
