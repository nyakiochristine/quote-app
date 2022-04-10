export class Quote {
    showAuthor!: boolean;
    
    constructor (
    public id:Number,
    public quo: string,
    public author: string,
    public completeDate: Date){
        this.showAuthor= false;
    }

    
}

    

//export class Goal {
    //public showDescription: boolean;
    //constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    //  this.showDescription=false;
    //}
  //

