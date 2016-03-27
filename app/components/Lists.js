import React, {PropTypes} from 'react';
import MessageBox from './MessageBox';
import AppStore from '../stores/testStore';
import EventButton from './EventButton';

function getTodoState() {
	return {
		allList: AppStore.getAll()
	};
}

class Lists extends React.Component {
	constructor(props) {
		super(props);
		this.state = getTodoState();
		this._onChange = this._onChange.bind(this);
	}
	componentDidMount(){
    	AppStore.addChangeListener(this._onChange);
	}
	componentWillUnmount(){
		AppStore.removeChangeListener(this._onChange);
	}
	_onChange(){
		console.log(getTodoState());
	    this.setState({
			allList: AppStore.getAll()
		});
  	}
	render() {
		var ListsNodes = this.state.allList.map(function(message) {
			return (
				<div className="listBox" key={message.id}>
					<MessageBox message={message} num={message.id}></MessageBox>
				</div>
			);
		});
		return (
            <div>
				<EventButton info="Add Name"></EventButton>
				<EventButton info="Delete"></EventButton>
    			{ListsNodes}
            </div>
		);
	}
}

export default Lists;
