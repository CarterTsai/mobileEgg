import React, {PropTypes} from 'react';
import Label from './Label'

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="checkbox" />
                <Label name={this.props.message[0]}></Label>
            </div>
        );
    }
}

MessageBox.propTypes = {
    message: PropTypes.array,
};

export default MessageBox;
