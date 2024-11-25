import { Injectable } from '@angular/core';
import { TradeData } from '../models';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private API_KEY = 'ct1l4u9r01qoprggo7h0ct1l4u9r01qoprggo7hg';
  private URL = `wss://ws.finnhub.io?token=${this.API_KEY}`;
  private $subject = webSocket(this.URL);

  constructor() {
    this.getSocketSubject().next({
      type: 'subscribe',
      symbol: 'BINANCE:BTCUSDT',
    });
  }

  getSocketSubject() {
    return this.$subject;
  }
}
