let 
  calculationCache = {}, 
  calculationCallbacks = {}, 
  mathWorker = new Worker('calculator.js'); 

mathWorker.addEventListener('message', (e) => {
  let message = e.data; 
  calculationCache[message.formula] = message.result; 
  calculationCallbacks[message.formula](message.result); 
});

function runCalculation(formula, callback) {
  if (formula in calculationCache) {
    return callback(calculationCache[formula]);  
  }; 

  if (formula in calculationCallbacks) {
    return setTimeout(() => {
      runCalculation(formula, callback);  
    }, 0);
  };
  mathWorker.postMessage(formula); 
  calculationCallbacks[formula] = callback; 
}
