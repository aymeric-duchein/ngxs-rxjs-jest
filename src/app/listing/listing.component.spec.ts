import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListingComponent} from './listing.component';
import {MockComponent, MockModule} from 'ng-mocks';
import {SearchComponent} from '@src/app/listing/search/search.component';
import {SortComponent} from '@src/app/listing/sort/sort.component';
import {TableComponent} from '@src/app/listing/table/table.component';
import {AddModule} from '@src/app/shared/add/add.module';

describe('ListingComponent', () => {
  let component: ListingComponent;
  let fixture: ComponentFixture<ListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingComponent, MockComponent(SearchComponent), MockComponent(SortComponent), MockComponent(TableComponent)],
      imports: [MockModule(AddModule)]
    });

    fixture = TestBed.createComponent(ListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });
});
