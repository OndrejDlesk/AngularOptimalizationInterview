import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const fibonacci = (n: any) => {
  // return 1;
  if (n === 1 || n === 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
})
export class DataListComponent implements OnInit {
  @Input()
  data!: Array<any>;

  @Input()
  title!: string;

  @Output()
  add: EventEmitter<string> = new EventEmitter();

  @Output()
  remove: EventEmitter<Array<any>> = new EventEmitter();

  label: string;

  constructor() {}

  ngOnInit(): void {}

  handlekey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }

  calculate(x: any) {
    return fibonacci(x);
  }
}
