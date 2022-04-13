export class Quote {
    public upvote: number; 
    public downvote: number;
    
    showDescription: boolean;
    constructor(
        
         
        public quote: string, 
        public description: string, 
        public author: string, 
        public submit: string, 
        public created_at: Date, 
         ){
        this.showDescription=false;
        this.upvote = 0;
        this.downvote = 0;
    }

}
