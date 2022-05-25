import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Loading from '../Loading/Loading';
import Item from '../../components/live/PurchaseItem';
import {requestGet, imageGet}from '../../requesthelper'

function LivePurchasePage({navigation}) {
  const [ready, setready] = useState(true);
  const [list, setlist] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      requestGet('http://192.168.219.178:3000/board/all').then(function (response){
        dataFilter(response);
      })
    }, 2000);
  },[list]);

  function dataFilter(data) {
    let datalist = data.filter(d => {
      return d.state == 2;
    });
    setlist(datalist);
    setready(false);
  }
  return ready ? (
    <Loading />
  ) : (
    <>
      <ScrollView style={{backgroundColor: '#ffffff'}}>
        <View style={styles.container}>
          {list.map((item, i) => {
            return <Item item={item} key={i} i={i} navigation={navigation} list={list}/>;
          })}
        </View>
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default LivePurchasePage;
