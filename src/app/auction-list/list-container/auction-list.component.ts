import { Component, Input, OnInit } from '@angular/core';

export type Auction = {
  auctionId: number;
  productId: number;
  title: string;
  initialPrice: number;
  startDateTime: string;
  endDateTime: string
}

@Component({
  selector: 'app-auction-list',
  templateUrl: './auction-list.component.html',
  styleUrls: ['./auction-list.component.css']
})
export class AuctionListComponent implements OnInit {
  displayedColumns = [
    "auction-id",
    "product-id",
    "auction-title",
    "initial-price",
    "auction-start-time",
    "auction-end-time",
    "auction-details-btn"
  ]
  @Input("auctionList") auctionList: Auction[] = [];
  @Input() totalElements: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  auctionDetails(auctionId: number): void {
    // TODO: na potem
  }
}
