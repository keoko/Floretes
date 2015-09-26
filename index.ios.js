/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;


var IMG_SERVER_URL = 'http://www.nelsonsnaturalworld.com/~/media/images/nelsonsdesktop/bach/remedies/';
var FLOWERS = [
  {name: 'heather',
   description: 'Those who are always seeking the companionship of anyone who may be available, as they find it necessary to discuss their own affairs with others, no matter who it may be. They are very unhappy if they have to be alone for any length of time.',
   image: IMG_SERVER_URL + 'heather.gif',
  },
  {name: 'white chestnut',
   description: 'For those who cannot prevent thoughts, ideas, arguments which they do not desire from entering their minds. Usually at such times when the interest of the moment is not strong enough to keep the mind full. Thoughts which worry and still remain, or if for a time thrown out, will return. They seem to circle round and round and cause mental torture. The presence of such unpleasant thoughts drives out peace and interferes with being able to think only of the work or pleasure of the day.',
   image: IMG_SERVER_URL + 'white chestnut.gif',
  },
  {name: 'olive',
   description: 'Those who have suffered much mentally or physically and are so exhausted and weary that they feel they have no more strength to make any effort. Daily life is hard work for them, without pleasure',
   image: IMG_SERVER_URL + 'olive.gif',
  },
  {name: 'red chestnut',
   description: 'For those who find it difficult not to be anxious for other people. Often they have ceased to worry about themselves, but for those of whom they are fond they may suffer much, frequently anticipating that some unfortunate thing may happen to them.',
   image: IMG_SERVER_URL + 'red chestnut.gif',
  },
  {name: 'holly',
   description: 'For those who are sometimes attacked by thoughts of such kind as jealousy, envy, revenge, suspicion. For the different forms of vexation. Within themselves they may suffer much, often when there is no real cause for their unhappiness',
   image: IMG_SERVER_URL + 'holly.gif',
  },
  ];

var Floretes = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(FLOWERS),
      loaded: true,
    });
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.container}>
        <Text>
          Loading flowers...
        </Text>
      </View>
    );
  },

  renderMovie: function(flower) {
    return (
      <View style={styles.container}>
        <Image
          source={{uri: flower.image}}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{flower.name}</Text>
          <Text style={styles.description}>{flower.description}</Text>
        </View>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  image: {
    width: 53,
    height: 81,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Floretes', () => Floretes);
