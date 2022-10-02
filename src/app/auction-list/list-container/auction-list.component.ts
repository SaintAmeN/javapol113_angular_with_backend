import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Auction } from 'src/app/model/auction';


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

  @Output() pageChanged = new EventEmitter<PageEvent>;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.changePage({
      pageSize: 5,
      pageIndex: 0,
      length: 0
    })
  }

  auctionDetails(productId: number): void {
    this.router.navigate(['/product/details/' + productId])
  }

  changePage(pageEvent?: PageEvent) {
    console.log('Page has been changed')
    this.pageChanged.emit(pageEvent);
  }
}
