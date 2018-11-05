function createFileReader(filename) {
  const listeners = []; 
  inconsistentRead(filename, value => {
    listeners.forEach(listener => listener(value)); 
  });

  return {
    onDataReady: listener => listeners.push(listener) 
  }; 
}
