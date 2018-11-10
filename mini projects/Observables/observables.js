class Observable {
  constructor(subscribe) {
    this._subscribe = subscribe;  
  }
  subscribe(observer) {
    return this._subscribe(observer);
  }

  static timeout(time) {
    // fix this

    return new Observable(subscribe(observer) => {
      const handle = setTimeout(() => {
        observer.next();  
        observer.complete(); 
      }, time); 
      return {
        unsubscribe() {
          clearTimeout(handle) 
        }
      }; 
    });
  };
};
