var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var collectionTweets = {};
var collectionName = 'new';

function addTweetToCollection(tweet) {
    collectionTweets[tweet.id] = tweet;
}

function removeTweetFromCollection(tweetId) {
    delete collectionTweets[tweetId];
}

function removeAllTweetFromCollection() {
    collectionTweets = {};
    console.log(collectionTweets);
}

function setCollectionName(name) {
    collectionName = name;
}

function emitChange() {
    CollectionStore.emit(CHANGE_EVENT);
    console.log('CollectionStore emit...');
}

var CollectionStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCollectionTweets: function() {
        return collectionTweets;
    },

    getCollectionName: function() {
        return collectionName;
    }
});

function handleAction(action) {
    switch (action.type) {
        case 'add_tweet_to_collection':
            console.log('add_tweet_to_collection');
            addTweetToCollection(action.tweet);
            emitChange();
            console.log('add_tweet_to_collection emitChange');
            break;
        case 'remove_tweet_from_collection':
            console.log('remove_tweet_from_collection');
            removeTweetFromCollection(action.tweetId);
            emitChange();
            break;
        case 'remove_all_tweets_from_collection':
            console.log('remove_all_tweets_from_collection');
            removeAllTweetFromCollection();
            emitChange();
            console.log('remove_all_tweets_from_collection emitChange');
            break;
        case 'set_collection_name':
            console.log('set_collection_name');
            setCollectionName(action.collectionName);
            emitChange();
            break;
        default:
    }
}

CollectionStore.dispatchToken = AppDispatcher.register(handleAction)

module.exports = CollectionStore;
