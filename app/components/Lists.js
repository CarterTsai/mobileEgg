import React, { PropTypes } from 'react';
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
        return (
            <div>
                <MessageBox message={this.state.allList} />
            </div>
        );
    }
}

export default Lists;
