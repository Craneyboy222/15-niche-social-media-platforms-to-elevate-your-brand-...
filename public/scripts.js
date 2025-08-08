/* JavaScript */
(function() {
  'use strict';
  document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');
    // Example of setting up WebSocket connection
    const socket = new WebSocket('wss://example.com/socket');
    socket.addEventListener('open', function(event) {
      console.log('Connected to WebSocket');
    });
    socket.addEventListener('message', function(event) {
      console.log('Message from server ', event.data);
    });
  });
})();