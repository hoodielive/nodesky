/** 
 * busy-waiting is not an ideal technique for processing non-blocking resources.
 * luckily, most modern operating systems provide a native mechanism to handle concurrent, 
 * non-blocking resources in an efficient way; 
 * the mechanism is called: 
 * synchronous event demultiplexer 
 * or
 * event notification interface
 * the component collects and queues I/O events that come from a set of watched resources, and block until new 
 * events are available to process.
 * the following psuedocode of an algorithm that uses a generic synchronous event demultiplexer to read 2 
 * distinct resources: 
**/ 

socketA, socketB; 
watchedList.add(socketA, FOR_READ); 
watchedList.add(socketB, FOR_READ); 
while(events = demultiplexer.watch(watchedList)) {
  // event loop 
  foreach(event in events) { 
    // this read will never block and will always return data 
    data = event.resource.read(); 
    if(data === RESOURCE_CLOSED)
      // the resource was closed, removce it from the watched list 
      demultiplexer.unwatch(event.resource); 
    else 
      // some actual data was received, process it 
      consumeData(data); 
  }
}
/** 
 * 1. The resources are added to a data structure, associating each one of them with a specific operation, in 
 *    our example, read().
 * 2. The event notifier is set up with the group of resources to be watched. This call is synchronous and blocks
 *    until any of the watched resources are ready for read. When this occurs, the event demultiplexer returns 
 *    from the call and a new set of events is available to be processed. 
 * 3. Each event returned by the event multiplexer is processed. At this point, the resource associated with each
 *    event is guaranteed to be ready to read and to not block during the operation. When all events are processed, 
 *    the flow will block again on the event demultiplexer until new events are again available to be processed. 
 *    This is called the event loop. 
**/ 


