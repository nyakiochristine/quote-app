import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upvote-downvote',
  templateUrl: './upvote-downvote.component.html',
  styleUrls: ['./upvote-downvote.component.css']
})
export class UpvoteDownvoteComponent implements OnInit {
  numberOfUpvotes: number= 0;
  upvoteButtonClick(){
    this.numberOfUpvotes++;

  }

  numberOfDownvotes:number= 0;
  downvoteButtonClick(){
    this.numberOfDownvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
