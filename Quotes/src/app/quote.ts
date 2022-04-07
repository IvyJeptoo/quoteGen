export class Quote {
    // id!: number;
    // quote!: string;
    // description!: string;
    // author!: string;
    // submitter!: string;
    showDescription: boolean;
    constructor(public id:number, public quote: string, public description: string, public author: string){
        this.showDescription=false;
    }

}
