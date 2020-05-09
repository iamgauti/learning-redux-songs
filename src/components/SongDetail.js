import React from 'react';
import {connect} from 'react-redux';

const SongDetail = (props) => {
	if(!props.selectedSong)
		return <div>Select a song to see details!!</div>;
	return (
		<div>
			<h3>Details of the selected song:</h3>
			Title : {props.selectedSong.title}<br/>
			Duration: {props.selectedSong.duration}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {selectedSong : state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);