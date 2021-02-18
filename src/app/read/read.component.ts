import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { EMPTY, Observable } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.action';
import { Tutorial } from '../models/tutorial.model';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  public tutorials$: Observable<Tutorial[]>;

  constructor(private store: Store) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
  }

  delTutorial(name: string) {
    this.store.dispatch(new RemoveTutorial(name))
  }

  ngOnInit(): void {
  }

}
