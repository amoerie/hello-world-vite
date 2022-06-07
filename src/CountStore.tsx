import { action, makeAutoObservable, observable } from "mobx";

export class CountStore {
    @observable
    count: number;


  
    constructor() {
      makeAutoObservable(this);
      this.count = 0;
    }
  
    @action
    increment() {
      this.count = this.count + 3;
    }
  }