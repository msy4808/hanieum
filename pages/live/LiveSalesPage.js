import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
RefreshControl
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Loading from '../Loading/Loading';
import {requestGet, imageGet} from '../../requesthelper';
import Item from '../../components/live/SakesItem';

function LiveSalesPage({navigation}) {
  const Top = createMaterialTopTabNavigator();
  const [ready, setready] = useState(true);
  const [allList, setallList] = useState([]);
  const [cateState, setCateState] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  const [selCate, setselCate] = useState('전체');
  const Test = {
    board_id : 1
  }
  function dataFilter(data) {
    let datalist = data.filter(d => {
      return d.state == 1;
    });
    setallList(datalist);
    setCateState(datalist);
    setready(false);
  }
  const getData = () => {
    requestGet('http://192.168.219.178:3000/board/all').then(function (
      response
    ) {
      dataFilter(response);
    }),imageGet('http://192.168.219.178:3000/board/get', Test);
  }
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  //새로고침 pull to Refresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getData();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 2000);
  },[]);
  const category = cate => {
    setselCate(cate);
    if (cate == '전체') {
      setCateState(allList);
    } else {
      setCateState(
        allList.filter(d => {
          return d.category == cate;
        }),
      );
    }
  };
  return ready ? (
    <Loading />
  ) : (
    <>
    <View>
      <ScrollView
        style={styles.menu}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          style={selCate == '전체' ? styles.menubutton1 : styles.menubutton2}
          onPress={() => {
            category('전체');
          }}>
          <Text style={selCate == '전체' ? styles.buttontext1 : styles.buttontext2}>전체</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selCate == '채소' ? styles.menubutton1 : styles.menubutton2}
          onPress={() => {
            category('채소');
          }}>
          <Text style={selCate == '채소' ? styles.buttontext1 : styles.buttontext2}>채소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selCate == '과일' ? styles.menubutton1 : styles.menubutton2}
          onPress={() => {
            category('과일');
          }}>
          <Text style={selCate == '과일' ? styles.buttontext1 : styles.buttontext2}>과일</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selCate == '정육' ? styles.menubutton1 : styles.menubutton2}
          onPress={() => {
            category('정육');
          }}>
          <Text style={selCate == '정육' ? styles.buttontext1 : styles.buttontext2}>정육</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selCate == '수산' ? styles.menubutton1 : styles.menubutton2}
          onPress={() => {
            category('수산');
          }}>
          <Text style={selCate == '수산' ? styles.buttontext1 : styles.buttontext2}>수산</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menubutton2}
          onPress={() => {
            category('기타');
          }}>
          <Text style={styles.buttontext2}>기타</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={{backgroundColor: '#ffffff'}}>
        <View style={styles.container}>
          {cateState.map((item, i) => {
            return <Item item={item} key={i} i={i} navigation={navigation} />;
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff',
  },
  menu: {
    alignContent: 'center',
    paddingLeft: 20,
    elevation: 5,
    backgroundColor: '#ffffff',
  },
  menubutton1: {
    borderColor: '#a1a1a1',
    width: 55,
    height: 32,
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7d7d'
  },
  menubutton2: {
    borderColor: '#a1a1a1',
    width: 55,
    height: 32,
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext1: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#ffffff'
  },
  buttontext2: {
    fontSize: 16,
    alignSelf: 'center',
    color: '#000000'
  }
});
export default LiveSalesPage;
