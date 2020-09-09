import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const themes = {
	colors: {
		primary: '#2E2F34',
		secondary: '#505351',
		accent: '#C26246',
		text: '#FFFFFF',
		textPlaceHolder: 'rgba(255, 255, 255, .5)',
		textAccent: '#CA9C69',
		icon: '#FFFFFF',
		chip: '#CA9C69',
	},
	metrics: {
		width,
		height,
		margin: 10,
		padding: 10,
		borderRadius: width / 2,
	},
};

export default themes;
