
import { Component } from '@angular/core';
import { EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote=new Quote(0,'','',new Date())
  dateValue = this.formatDate(new Date());
 
  
  @Output()addQuote = new EventEmitter<Quote>();
  
  
 
   
  
  

  submitQuote(form: NgForm){
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.addQuote.emit(new Quote(0, this.newQuote.quo.trim(), this.newQuote.author.trim(), new Date(this.dateValue)));
    this.newQuote = new Quote(0, '', '', new Date());
    this.dateValue = this.formatDate(new Date());
    form.resetForm(this.newQuote);
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  
  

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
