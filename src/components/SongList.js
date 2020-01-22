import React from "react";
import { connect } from "react-redux";

const SongList = props => {
  console.log(props);

  return <div>SongList</div>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SongList);
