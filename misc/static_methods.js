class TryStaticCall {
  constructor() {
    console.log(TryStaticCall.staticMethod()) 
  }

  static staticMethod() {
    return 'static method has been called.' 
  }
}

new TryStaticCall(); 
