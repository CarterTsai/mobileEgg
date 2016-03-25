import React from 'react';
import MessageBox from './MessageBox';

var Lists = React.createClass({    
  render: function() {
    return (
        <div>
            <MessageBox message="John" />
        </div>
    );
  }
});

module.exports = Lists;
