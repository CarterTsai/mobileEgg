import React, {
	PropTypes
} from 'react';
import MessageBox from './MessageBox';
import AppStore from '../stores/testStore'

function getTodoState() {
	return {
		allList: AppStore.getAll()
	};
}

class Lists extends React.Component {
	constructor(props) {
		super(props);
		this.state = getTodoState();
	}

	render() {
		var ListsNodes = this.state.allList.map(function(message, index) {
			return (
                <MessageBox message={message} key={index}></MessageBox>
			);
		});
        console.log();
		return (
            <div>
    			{ListsNodes}
            </div>
		);
	}
}

export default Lists;
