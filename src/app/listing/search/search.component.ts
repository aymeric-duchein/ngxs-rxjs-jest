import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Store} from '@ngxs/store';
import {SearchFormUpdated} from '../listing.actions';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchFormControl: FormControl = new FormControl('');
  isDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store) {
  }

  ngOnInit() {
    this.searchFormControl.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.isDestroyed$)
    ).subscribe((value) => {
      this.store.dispatch(new SearchFormUpdated(value));
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }
}
