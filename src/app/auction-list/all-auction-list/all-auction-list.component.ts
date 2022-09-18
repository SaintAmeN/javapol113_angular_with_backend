import { Component, OnInit } from '@angular/core';
import { AuctionService } from 'src/app/auction-service/auction.service';
import { PageResponse } from 'src/app/model/pagination';
import { Auction } from '../list-container/auction-list.component';

@Component({
  selector: 'app-all-auction-list',
  templateUrl: './all-auction-list.component.html',
  styleUrls: ['./all-auction-list.component.css']
})
export class AllAuctionListComponent implements OnInit {
  auctionPageResponse: PageResponse<Auction> = {
    content: [],
    totalElements: 0
  }

  constructor(private auctionService: AuctionService) {

  }

  ngOnInit(): void {
    this.getAuctionsFromBackend(0, 10);
  }

  getAuctionsFromBackend(page: number, size: number): void {
    this.auctionService.getAuctionsFromBackend(page, size)
    .subscribe({
      next: (data) =>{
        console.log(data)

        this.auctionPageResponse = data;
      },
      error: (error) => {
        console.log(error)

      }
    })
  }

}
