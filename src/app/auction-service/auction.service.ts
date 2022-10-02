import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Auction, CreateAuctionRequest } from '../model/auction';
import { BACKEND_BASE_URL } from '../model/constants';
import { PageResponse } from '../model/pagination';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private httpClient: HttpClient) {

  }

  getAuctionsFromBackend(page: number, size: number): Observable<PageResponse<Auction>> {
    const params = {
      page: page,
      size: size
    }

    return this.httpClient
      .get<PageResponse<Auction>>('http://localhost:8080/api/auction', {
        params: params
      });
  }

  public sendAuctionToBackend(request: CreateAuctionRequest): Observable<Auction> {
    return this.httpClient.post<Auction>(BACKEND_BASE_URL + "auction", request)
  }
}
