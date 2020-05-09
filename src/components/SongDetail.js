import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
	if(!props.selectedSong)
		return <div>Select a song to see details!!</div>;
	return (
		<div class="ui cards">
		  <div class="card">
		    <div className="content">
			<div className="header">Details of the selected song:</div>
			<div className="description">
			Title : {props.selectedSong.title}<br/>
			Duration: {props.selectedSong.duration}
			</div>
		</div>
		</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {selectedSong : state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);