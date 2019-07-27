// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

/*********************************************
            add song list
*********************************************/

function showSongList() {
  for (let song of album.tracks) {
    const li = document.createElement('li')
    let writeHtml = ''
    writeHtml += `
      <a class="nav-link" id="${song}" data-toggle="pill" href="#" role="tab">${song}</a>
    `
    li.innerHTML = writeHtml
    songList.appendChild(li)
  }
}

/*********************************************
            show song in panel
*********************************************/
function showLyrics(song, lyrics) {
  lyricsPanel.innerHTML = `
    <h3>${song}</h3>
    <pre>${lyrics}</pre>
  `
}
/*********************************************
            click song list event
*********************************************/
songList.addEventListener('click', event => {
  const artist = album.artist
  const songName = event.target.id
  const url = `${BASE_URL}${artist}/${songName}`

  axios.get(url).then(response => {
    const lyrics = response.data.lyrics

    showLyrics(songName, lyrics)
  })
    .catch(error => console.log(error))
})


showSongList()