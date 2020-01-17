import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchComponent} from './search.component';
import {MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockModule} from 'ng-mocks';
import {NgxsModule, Store} from '@ngxs/store';
import {By} from '@angular/platform-browser';
import {SearchFormUpdated} from '@src/app/listing/listing.actions';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let store: Store;
  beforeEach(() => {
    jest.useFakeTimers();

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [
        NgxsModule.forRoot(),
        MockModule(MatIconModule),
        MockModule(MatInputModule),
        ReactiveFormsModule,
        FormsModule,
      ]
    });
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.todo('should create');

  test.todo('should dispatch update after debounce time');

  test.todo('should postpone updates during debounce time');

  afterAll(() => jest.useRealTimers());
});
