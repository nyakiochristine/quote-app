 //import { Quote } from '@angular/compiler';
import { Component, OnInit  } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,
      'Kris going out.Find an online version'
      ,'Author:Andile',
      new Date()),

      new Quote(2,
        'Always Shine as Bright as Diamond',
        'Author:Lucy'
        ,
        new Date()),

        new Quote(3,
          'We are born to succeed in life',
          'Author:Njoki',
          new Date())
  
  ]
   
 
  
      
    
 
    
  




  
    
  constructor() { }

  ngOnInit(): void {
  }

}
function newFunction() {
  return 1;
}

