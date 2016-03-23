const Test = React.createClass({
  getInitialState : function() {
    return {
      count: 0
    };
  },
  onClick : function() {
    this.setState({ count: this.state.count + 1});
  },
  render:function() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.onClick}>click</button>
      </div>
    );
  }
});

export default Test;

// var MyLabel = React.createClass({
//     getInitialState() {
//         return { count: 0 };
//     }
//     onClick() {
//         this.setState({ count: this.state.coount + 1 });
//     }
//     render() {
//         return (
//             <div>
//                 <span>{this.state.count}</span>
//                 <button onClick={this.onClick}>click</button>
//             </div>
//         );
//     }
// });


// MyLabel extends React.Component {
//     getDefaultProps() {
//       return {
//         path: ['React', 'About'];
//       };
//     },
//     render() {
//       var { path } = this.props;
//       return (
//         <nav className="breadcrumbs">
//           <a href="index.html">Home</a>
//           {
//             path.map((v) => {
//               return <span><span className="divider">›</span>{v}</span>
//             })
//           }
//         </nav>
//       );
//     }


    // constructor(props) {
    //   super(props);
    //   this.state = {count: props.initialCount};
    // }
    //
    // tick() {
    //   this.setState({count: this.state.count + 1});
    // }
    //
    // render() {
    //   return (
    //     <div onClick={this.tick.bind(this)}>
    //       Clicks: {this.state.count}
    //     </div>
    //   );
    // }
// }

// MyLabel.propTypes = { initialCount: React.PropTypes.number };
// MyLabel.defaultProps = { initialCount: 12 };
