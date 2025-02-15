let initialPlaylist = ['Welcome to the jungle', 'Wonderwall', 'Faith']
console.log('Playlist: ', initialPlaylist);

function managePlaylist(playlist, newSong) {
  playlist.shift()
  playlist.unshift(newSong)

  return playlist
}

let newSongToAdd = 'Rollin'
let updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)

console.log(newSongToAdd)
console.log(updatedPlaylist)
