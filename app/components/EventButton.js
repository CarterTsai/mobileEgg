import React, {PropTypes} from 'react';
import AppAction from '../actions/AppAction';

class EventButton extends React.Component {
    constructor(props) {
        super(props);
    }
    _add() {
        AppAction.add("hello");
    }
    render() {
        return (
            <div className="event-button">
                <button type="button" onClick={this._add}>
                    {this.props.info}
                </button>
            </div>
        );
    }
}

EventButton.propTypes = {
    info: PropTypes.string
};

export default EventButton;
