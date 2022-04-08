import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


   quotes: Quote[]= [
    new Quote(1,'Ipo siku','a quote said by every comrade who wants to be rich','Comrade', 'Kafukuswi', new Date(2022,1,2), 0, 0),
    new Quote(2, 'Jambo Kenya', 'said by every white person who visits Kenya', 'Mzungu', 'Alehandro', new Date(2022,2,4), 0, 0),
    new Quote(3, 'Hakuna Matata', 'said by Pumba and Timon in Lion King', 'Simba','Scar', new Date(2022,4,2), 0, 0),

  ] ;

  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  toggleDetails(index:number){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete:any, index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote} quote?`)
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}
