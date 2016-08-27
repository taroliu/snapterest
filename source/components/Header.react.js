var React = require('react');

var headerStyle = {
    fontWeight: '300',
    display: 'inline-block',
    margin: '20px 10px'
}

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            text: 'Default header'
        };
    },

    render: function() {
        return (
            <h3 style={headerStyle}>{this.props.text}</h3>
        );
    }

});

module.exports = Header;
