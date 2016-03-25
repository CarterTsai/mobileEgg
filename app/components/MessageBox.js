import React, {PropTypes} from 'react';

class MessageBox extends React.Component {
  render() {
    return (
        <div>
         Hello !!! {this.props.message}
        </div>
    )
  }
};

export default MessageBox;
