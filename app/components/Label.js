import React, {PropTypes} from 'react';

var Lable = React.createClass({
  render: function() {
    return <label>Hi !! {this.props.name}</label>;
  }
});

Lable.propTypes = {
    name: PropTypes.string,
};

module.exports = Lable;
