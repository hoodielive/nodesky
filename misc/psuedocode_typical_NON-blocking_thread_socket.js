/** 
 * psuedocode showing how its possible to read from multiple resources using non-blocking I/O and a polling loop
 * you'll see that with this 'simple' technique, its already possible to handle different resources in the same
 * thread, but that doesn't mean its efficient lol
 * the loop is expensive and will consume precious CPU for iterating over resources that are unavailable most
 * of the time
 * Polling algorithms usually result in a huge amount of wasted CPU time. 
**/  

resources = [ socketA, socketB, pipeA ]; 
while(!resources.isEmpty()) {
  for(i=0; i < resources.length; i++) {
    resource = resources[i]; 
    // try to read 
    let data = resources.read(); 
    if(data === NO_DATA_AVAILABLE)
      // there is no data to read at the moment
      continue; 
    if(data === RESOURCES_CLOSED)
      // the resource was closed, remove it from the list
      resources.remove(i); 
    else
      // some data was received, process it 
      consumeData(data); 
  }
}
