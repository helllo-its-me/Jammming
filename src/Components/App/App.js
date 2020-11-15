import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{ name: 'name_1', artist: 'artist_1', album: 'album_1', id: 1 }, { name: 'name_2', artist: 'artist_2', album: 'album_2', id: 2 }, { name: 'name_3', artist: 'artist_3', album: 'album_3', id: 3}],
      playlistTracks: [{ name: 'listName_1', artist: 'listArtist_1', album: 'listAlbum_1', id: 1 }, { name: 'listName_2', artist: 'listArtist_2', album: 'listAlbum_2', id: 2 }, { name: 'listName_3', artist: 'listArtist_3', album: 'listAlbum_3', id: 3}],
      playlistName: 'My favorite playList'
    };
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.id.includes(track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
  }

  render() {
  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
  );
}
}
export default App;
