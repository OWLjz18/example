const sendRequest = () => fetch('/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ message: 'Pikachu!' }, null, 2)
});

setTimeout(() => sendRequest(), 2000);
