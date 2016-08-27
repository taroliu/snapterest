var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({

    getInitialState: function() {
        console.log('[Snaptertest] StreamTweet: 1. Running getInitialState()');
        return {
            numberOfCharacterIsIncreasing: null,
            headerText: null
        };
    },

    componentWillMount: function() {
        console.log('[Snaptertest] StreamTweet: 2. Running componentWillMount()');
        this.setState({
            numberOfCharacterIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        })

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        }
    },

    componentDidMount: function() {
        console.log('[Snaptertest] StreamTweet: 3. Running componentDidMount()');

        var componentDOMRepresentation = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('[Snaptertest] StreamTweet: 4. Running componentWillReceiveProps()');
        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetTextLenght = nextProps.tweet.text.legnth;
        var isNumberOfCharactersIncreasing = (nextTweetTextLenght > currentTweetLength);

        var headerText;
        this.setState({
            numberOfCharacterIsIncreasing: isNumberOfCharactersIncreasing
        });

        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of character is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }

        this.setState({
            headerText: headerText
        });


        window.snapterest.numberOfReceivedTweets++;
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('[Snaptertest] StreamTweet: 5. Running shouldComponentUpdate()');

        return (nextProps.tweet.text.length > 1);
    },

    componentWillUpdate: function(nextProps, nextState) {
        console.log('[Snaptertest] StreamTweet: 6. Running componentWillUpdate()');
    },

    componentDidUpdate: function(prevProps, prevState) {
        console.log('[Snaptertest] StreamTweet: 7. Running componentDidUpdate()');

        window.snapterest.numberOfDisplayedTweets++;
    },

    componentWillUnmount: function() {
        console.log('[Snaptertest] StreamTweet: 8. Running componentWillUnmount()');

        delete window.snapterest;
    },

    render: function() {
        console.log('[Snapterest] StreamTweet: Running render()');
        return (
            <section>
        		<Header text={this.state.headerText}/>
        		<Tweet tweet={this.props.tweet}
        		onImageClick ={this.props.onAddTweetToCollection}/>
        	</section>
        );
    }

});

module.exports = StreamTweet;
