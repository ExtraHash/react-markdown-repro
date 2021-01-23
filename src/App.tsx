import React from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>React Markdown Bug</h1>
      <label>Regular link:</label>
      <br />
      <a href="magnet:?xt=urn:btih:36c67464c37a83478ceff54932b5a9bddea636f3&dn=ubuntu-20.04.1-live-server-amd64.iso&tr=https%3a%2f%2ftorrent.ubuntu.com%2fannounce&tr=https%3a%2f%2fipv6.torrent.ubuntu.com%2fannounce">magnet:?xt=urn:btih:36c67464c37a83478ceff54932b5a9bddea636f3&dn=ubuntu-20.04.1-live-server-amd64.iso&tr=https%3a%2f%2ftorrent.ubuntu.com%2fannounce&tr=https%3a%2f%2fipv6.torrent.ubuntu.com%2fannounce</a>
      <br />
      <br />
      <label>React-Markdown link:</label>
      <ReactMarkdown>
        [magnet:?xt=urn:btih:36c67464c37a83478ceff54932b5a9bddea636f3&dn=ubuntu-20.04.1-live-server-amd64.iso&tr=https%3a%2f%2ftorrent.ubuntu.com%2fannounce&tr=https%3a%2f%2fipv6.torrent.ubuntu.com%2fannounce](magnet:?xt=urn:btih:36c67464c37a83478ceff54932b5a9bddea636f3&dn=ubuntu-20.04.1-live-server-amd64.iso&tr=https%3a%2f%2ftorrent.ubuntu.com%2fannounce&tr=https%3a%2f%2fipv6.torrent.ubuntu.com%2fannounce)
      </ReactMarkdown>
    </div>
  );
}

export default App;
