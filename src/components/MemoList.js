import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>まだ残っている</Text>
          <Text style={styles.memoDate}>2019/4/15</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/4/15</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/4/15</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>講座のアイデア</Text>
          <Text style={styles.memoDate}>2019/4/15</Text>
        </View>

        <View style={styles.memoListItem}>
          <Text style={styles.memoTitle}>主に賛美</Text>
          <Text style={styles.memoDate}>2019/4/15</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    backgroundColor: '#FFF',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default MemoList;
