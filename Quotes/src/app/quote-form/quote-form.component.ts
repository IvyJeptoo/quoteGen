import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote: any = Quote;
  @Output() onAddQuote = new EventEmitter<Quote>();

  addQuote(a: string, b: string, c: string, d: string) {
    this.newQuote = new Quote(a, b, c, d, new Date());
    this.onAddQuote.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
