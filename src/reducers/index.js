import {combineReducers} from 'redux';
const songsReducer = () => {
	return [
		{title:"A",duration:"4:00"},
		{title:"B",duration:"5:05"},
		{title:"C",duration:"3:30"},
		{title:"D",duration:"6:02"},
		{title:"E",duration:"3:55"}
	];
};

const selectSongReducer = (selectedSong=null,action) => {
	if(action.type === 'SONG_SELECTED')
	{
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs : songsReducer,
	selectedSong : selectSongReducer
});