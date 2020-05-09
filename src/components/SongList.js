import React from 'react';
import {connect} from 'react-redux';
import { selectSongs } from '../actions'

class SongList extends React.Component{
	render(){
		return (
			<div className="ui divided list">
			{this.props.songs.map((song)=>{
				return (
					<div className="item" key={song.title}>
						<div className="right floated content">
							<button onClick={() => {this.props.selectSongs(song)} }
							className="ui button primary">Select</button>
						</div>
						<div className="content">{song.title}</div>
					</div>
				);
			})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return { songs : state.songs};
};

export default connect(mapStateToProps,{selectSongs})(SongList);