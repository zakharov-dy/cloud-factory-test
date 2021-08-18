import { action, observable, makeObservable } from 'mobx';

import {Quotation} from '../../../api/ticker/quotation.types';

export class TickerRow {
  // TODO: https://stackoverflow.com/questions/67266810/error-mobx-cannot-apply-observable-to-storeuser-field-not-found
  public name?: string = undefined;
  public last?: string = undefined;
  public highestBid?: string = undefined;
  public percentChange?: string = undefined;

  constructor({last, highestBid, percentChange}: Quotation, name: string) {
    makeObservable(this, {
      last: observable,
      highestBid: observable,
      percentChange: observable,
      update: action
    });
    
    this.name = name;
    this.last = last;
    this.highestBid = highestBid;
    this.percentChange = percentChange;
  }

  public update({last, highestBid, percentChange}: Quotation) {
    this.last = last;
    this.highestBid = highestBid;
    this.percentChange = percentChange;
  }
}
