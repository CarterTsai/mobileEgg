import React, {PropTypes} from 'react';
import Label from './Label'

class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="lable">
                <span>{this.props.num}</span>
                <input type="checkbox" />
                <Label name={this.props.message}></Label>
            </div>
        );
    }
}

MessageBox.propTypes = {
    message: PropTypes.string,
    num: PropTypes.number
};

export default MessageBox;
