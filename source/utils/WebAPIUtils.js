var SnapkiteStreamClient = require('snapkite-stream-client');
var TweetActionCreators = require('../actions/TweetActionCreators');

function initializeStreamOfTweets() {
    SnapkiteStreamClient.initializeStream(TweetActionCreators.receiveTweet, {
        hostname: '192.168.1.105',
        port: 3000,
        delayInMilliseconds: 1500,
        cacheNumberOfTweets: 20
    });
}

module.exports = {
    initializeStreamOfTweets: initializeStreamOfTweets
}
