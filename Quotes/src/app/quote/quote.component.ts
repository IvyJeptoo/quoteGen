import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote'



@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


   quotes: Quote[]= [
     new Quote('Ipo siku','a quote said by every comrade who wants to be rich','Comrade', 'Kafukuswi', new Date(2022,1,2)),
     new Quote('Jambo Kenya', 'said by every white person who visits Kenya', 'Mzungu', 'Alehandro', new Date(2022,2,4)),
     new Quote('Hakuna Matata', 'said by Pumba and Timon in Lion King', 'Simba','Scar', new Date(2022,4,2)),

  ] ;

  // topVotes:number = 0;
  highestVote: Quote = new Quote('i hope it works', 'it works in my machine', 'Ivy','Jeptoo', new Date())

  

 
  upvote(index:number){
    this.quotes[index].upvote += 1;
    for(let i = 0; i < this.quotes.length; i++) {
      if(this.quotes[i].upvote > this.highestVote.upvote){

        this.highestVote = this.quotes[i]
      }
      
      
    }
    
    
  }

  downvote(index: number){
    this.quotes[index].downvote += 1;
    
  }

  addNewQuote(quote: any){
   if(quote.quote == '' || quote.details == '' || quote.author == '' || quote.submit == ''){
     if(quote.quote == ''){
       alert('Input quote please')
     } else if(quote.details == '') {
       alert('please add quote description')
     }else if(quote.author == ''){
       alert('imput quote author please')
     }else{
       alert('input your name')
     }
     
   }else{
     this.quotes.unshift(quote);
   }

    
  }

  toggleDetails(index:number){
    this.quotes[index].showDescription= !this.quotes[index].showDescription;
  }

  deleteQuote(value:boolean, index:number){
    if(value){
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
