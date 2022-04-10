import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
