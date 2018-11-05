/**
 * traditional blocking I/O programming, the function call corresponding to an I/O request will block
 * the execution of the thread until the operation completes.
 * This can go from a few milliseconds (disk access)
 * to minutes or 'more' in case of generated 'user' actions, such as pressing keys
 **/

// blocks the thread until the data is available
const data = socket.read();

// data is available
console.log(data);

/**
 * it is trivial to notice that a web server that is implemented using blocking I/O will NOT be able to handle
 * multiple connections in the same thread;
 * each I/O operation on a socket will block the processing of any other connection.
 * For this reason, the traditional approach to handleing concurrency in web servers is to kick oof a thread
 * or a process (or to reuse one taken from a pool) for each concurrent connection that needs to be handled.
 * this way, if a thread gets blocke dfor an I/O operation it will not impact the availability of the other
 * requests, because they are handled in seperate threads.
 **/
