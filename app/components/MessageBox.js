import React, {PropTypes} from 'react';

class MessageBox extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
             Hello !!! {this.props.message}
            </div>
        );
    }
}

MessageBox.propTypes = {
    message: PropTypes.string
};

export default MessageBox;
