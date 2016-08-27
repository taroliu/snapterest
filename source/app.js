var React = require('react');
var ReactDOM = require('react-dom');

// var listOfItems = <ul className="list-of-items">
//                    <li className="item-1">Item 1</li>
//                    <li className="item-2">Item 2</li>
//                    <li className="item-3">Item 3</li>
//                   </ul>;

// ReactDOM.render(listOfItems, document.getElementById('react-application'));

var App = React.createClass({
    getInitialState: function() {
        return {
            isHeaderHidden: false
        };
    },

    handleClick: function() {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },

    render: function() {
        if (this.state.isHeaderHidden) {
            return (
                <div>
	            	<button className="btn btn-default" onClick={this.handleClick}>Toggle Header</button>
	            </div>
            );
        } else {
            return (
                <div>
	            	<h1 className="header">React Component</h1>
	            	<button className="btn btn-default" onClick={this.handleClick}>Toggle Header</button>
	            </div>
            );
        }
    }

});

ReactDOM.render(<App/>, document.getElementById('react-application'));
