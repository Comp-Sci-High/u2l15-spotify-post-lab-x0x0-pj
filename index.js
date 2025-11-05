// U2L15: Spotify POST Request Lab

// Create a Playlist:

// 1. Look through the Spotify API Documentation and find the end point for creating a playlist.
// Update the variable below called `createPlaylistURL` and add the URL, the user_id will be 31s5fcbgzo3pkww6ancnzov63cjm

let createPlaylistURL = "https://api.spotify.com/v1/users/31s5fcbgzo3pkww6ancnzov63cjm/playlistsk";

// 2. The documentation describes how to create the request body. Using that information update the object below called `newPlaylistBody`
// Add the name of the playlist, make sure it's public, and add a description with your name and section (+ whatever else you want)

const newPlaylistBody = {
"name": "Peji's Palace",
"description": "public palace",
"public": true
};

// 3. Add `playlistData` as a parameter to the asynchronous function `createPlaylist`.

async function createPlaylist() {


  // 4. Build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newPlaylistBody` object into the body, make sure you stringify it

  const options = {
    method: 'POST',
    headers:{
      Authorization: 'Bearer BQBtdwogS5M_A-9kNng5ax5w6j4FJIIb80P6XtlnWFTKWu58AAn6bXijEhp8JuS35iqQ-xOpudQrzlZbbFMOgFwG-0CXoEpx5cdBVep8Zoo1NeZR4gHjN4RFG-9aMcQXnuccAh6qoJVWmnqDsCsOXv-ZpMFki2M0nMH4FRVW2Y1Ls-iBV0x5ySvXoXL5eOevtPIDPOZc71valXj1xgY8q4UfWan9bqkkUQFvwLnHUnQEkIPSQS8ENEuq1Mf2QEhWa4v52kC4i53OAd5WAWDRG1zQOrZzO2iuK9Z8StIo1feC',
      'Conten-Type': 'application/json'
    }
  };

  // 5. Use fetch() to send a POST request using the `createPlaylistURL` and options object. Console log the response.
  const response = await fetch(createPlaylistUrl,options);
}

// 6. Call your function `createPlaylist` with `newPlaylistBody` passed as the parameter. Take note of the ID it will be needed in the next request.
// Go to the Spotify Profile to see the playlist you created. (Or follow the URL in the response)
// https://open.spotify.com/user/31s5fcbgzo3pkww6ancnzov63cjm



// Add Songs to Playlist:

// 1. Look through the Spotify API Documentation and find the end point for adding songs to a playlist.
// Update the variable below called `addingSongsURL` and add the URL, use the playlist_id that you recieved from the function above

let addingSongsURL = "";

// 2. Find 4 songs on spotify and add them to the songs array below. (If spotify is blocked use the example below, or ask Mr.Castro)
//    - The songs should be in the format: "spotify:track:<track_id>"
//    - Find the track id from the songs URL after track/ but before the queries
//    - Ex: https://open.spotify.com/track/6a6JDEQbXdxkWFRIA0pRqL?si=e9e0c29125a746f6 => spotify:track:6a6JDEQbXdxkWFRIA0pRqL

const songs = [];

// 3. The documentation describes how to create the request body. Using that information update the object below called `newSongsBody`
// Add the array `songs` into this object

const newSongsBody = {

};

// 4. Add `songData` as a parameter to the asynchronous function `addPlaylistSongs`.

async function addPlaylistSongs() {

  // 5. Inside the function build out the options object.
  //    - Set the HTTP Method
  //    - Add the headers Authorization and Content-Type, the API Key will be on G-Chat. Format it like so: "Bearer <Your API Key>"
  //    - Add the `newSongsBody` object into the body, make sure you stringify it

  const options = {
    
  };

  // 6. Use fetch() to send a POST request using the `addingSongsURL` and options object. Console log the response.
}

// 7. Call your function `addPlaylistSongs` with `newSongsBody` passed as the parameter.
// Refresh the page to your playlist, you should see your 3 new songs.
