import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksTodoPage } from './tasks-todo.page';

describe('TasksTodoPage', () => {
  let component: TasksTodoPage;
  let fixture: ComponentFixture<TasksTodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksTodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
