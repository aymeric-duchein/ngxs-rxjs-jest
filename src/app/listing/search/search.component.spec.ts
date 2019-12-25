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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should dispatch update after debounce time', () => {
    const searchInput = fixture.debugElement.query(By.css(`input`));
    searchInput.nativeElement.value = 'new search';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    jest.advanceTimersByTime(299);
    expect(store.dispatch).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(store.dispatch).toHaveBeenCalledWith(new SearchFormUpdated('new search'));
  });

  test('should postpone updates during debounce time', () => {
    const searchInput = fixture.debugElement.query(By.css(`input`));
    searchInput.nativeElement.value = 'new search';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    jest.advanceTimersByTime(150);
    searchInput.nativeElement.value = 'second search';
    searchInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(store.dispatch).not.toHaveBeenCalled();
    jest.advanceTimersByTime(299);
    expect(store.dispatch).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1);
    expect(store.dispatch).toHaveBeenCalledWith(new SearchFormUpdated('second search'));
  });

  afterAll(() => jest.useRealTimers());
});
