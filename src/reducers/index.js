import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Busta Rhymes - Break ya neck",
      duration: "4:04"
    },
    {
      title: "Evidence - You",
      duration: "4:08"
    },
    {
      title: "Dilated Peoples - Worst comes to worst",
      duration: "3:19"
    },
    {
      title: "The Black Eyed Peas - Where is the love?",
      duration: "4:13"
    },
    {
      title: "Dr. Dre feat. Snoop Dogg & Nate Dogg - The next episode",
      duration: "2:13"
    },
    {
      title: "Outkast - Mrs. Jackson",
      duration: "4:31"
    },
    {
      title: "Jay-Z feat. Eminem - Renegade",
      duration: "5:36"
    },
    {
      title: "Wu-Tang Clan - C.R.E.A.M.",
      duration: "4:01"
    },
    {
      title: "Little Brother feat. Kanye West - I see now (Aww)",
      duration: "4:19"
    },
    {
      title: "2Pac - My block",
      duration: "5:16"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
