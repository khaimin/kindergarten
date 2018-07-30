import {React} from 'react';
import {View} from 'react-native';

const List = (props) => {
	return (
		<View style={styles.listStyle}>
			{props.children}
		</View>
	);
};
const styles = {
	listStyle: {
		borderWidths: 1,
		height: 30,
		borderColor: '#ddd',
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10
	}
}
export default List;