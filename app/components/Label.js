import React from 'react';

var Lable = React.createClass({
  render: function() {
    return <label>Good !! {this.props.name}</label>;
  }
});

module.exports = Lable;
