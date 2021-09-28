import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'reducer/reducer';
import { getCriticality } from 'reducer/selectors';

@Component({
  selector: 'app-criticality-level',
  templateUrl: './criticality-level.component.html',
  styleUrls: ['./criticality-level.component.scss'],
})
export class CriticalityLevelComponent implements OnInit {
  criticalityLevelName: string = '';
  className: string = '';

  criticalityLevel$ = this.store
    .select(getCriticality)
    .subscribe((criticality) => {
      this.className = criticality?.className ?? 'yellow-level';
      this.criticalityLevelName =
        criticality?.criticalityLevelName ?? 'Excepcional';
    });

  constructor(private store: Store<State>) {}

  ngOnInit(): void {}
}
