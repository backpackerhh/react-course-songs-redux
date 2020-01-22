import React from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

const SongList = props => {
  const renderList = () => {
    return props.songs.map(song => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  };

  return <div className="ui divided list">{renderList()}</div>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { selectSong })(SongList);
