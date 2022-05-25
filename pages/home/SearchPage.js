import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import { Icon } from 'react-native-elements'
//Components
import Keyword from '../../components/home/Keyword'

function SearchPage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState()
  const [keywordList, setKeywordList] = useState([])

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 70,
        shadowColor: 'black',
        elevation: 5,
      },
      headerTitle: () => (
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          placeholder=''
          clearIcon={() => <Icon name='cancel' size={20} color='#dbdbdb' />}
          onSubmitEditing={handleAddKeyword}
        />
      )
    })
  })

  const handleAddKeyword = () => {
    setKeywordList([
      ...keywordList,
      searchQuery
    ])
    setSearchQuery('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.View}>
        <View style={styles.recentlyView}>
          <Text style={styles.recentlyTitle}>최근 검색어</Text>
          <View style={styles.recentlyContent}>
            {keywordList.map((keyword, index) => (
              <Keyword key={index} data={keyword} />
            ))}
          </View>
        </View>
        <View style={styles.recentlyView}>
          <Text style={styles.recentlyTitle}>추천 검색어</Text>
          <View style={styles.recentlyContent}>
            <TouchableOpacity style={styles.recentlyBorder}>
              <Text style={styles.recentlyText}>채소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recentlyBorder}>
              <Text style={styles.recentlyText}>사과</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  View: {
    width: '85%',
  },
  searchBar: {
    backgroundColor: '#f5f5f5',
    height: 43,
    width: '100%',
    elevation: 0,
  },
  recentlyView: {
    marginTop: 20,
  },
  recentlyTitle: {
    color: '#a1a1a1',
    fontWeight: '700',
    marginBottom: 10,
  },
  recentlyContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  recentlyBorder: {
    borderWidth: 1,
    borderColor: '#a1a1a1',
    paddingTop: 8,
    paddingRight: 13,
    paddingBottom: 8,
    paddingLeft: 13,
    borderRadius: 20,
    marginRight: 7,
    marginBottom: 10,
  },
  recentlyText: {
    fontWeight: '700',
  },
})

export default SearchPage


