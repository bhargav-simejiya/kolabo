// Global imports
import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


// File imports
import COLORS from '../../Helper/Colors'
import { WIDTH } from '../../Helper/Constants'
import FONTS from '../../Helper/Fonts'
import StyleConfig from '../../Helper/StyleConfig';
let dataJson = [
  {
    id: 1,
    title: "",
    icon: "sort-variant",
    action: "BACK",
    showDevider:false
  },
  {
    id: 2,
    title: "Notifications",
    icon: null,
    action: "NotificationScreen",
    showDevider: true
  },
  {
    id: 3,
    title: "Settings",
    icon: null,
    action: "SettingsScreen",
    showDevider: true
  },
  {
    id: 4,
    title: "Contact Us",
    icon: null,
    action: "ContactUsScreen",
    showDevider: true
  },
  {
    id: 5,
    title: "About Us",
    icon: null,
    action: "AboutUsScreen",
    showDevider: true
  },
  {
    id: 6,
    title: "FAQ",
    icon: null,
    action: "FAQScreen",
    showDevider: true
  },
  {
    id: 7,
    title: "App Version",
    icon: null,
    action: null,
    showDevider: true
  },
  {
    id: 8,
    title: "Log Off",
    icon: null,
    action: null,
    showDevider: false
  },
]

const SideBarItem = ({ item, onItemPress,...props }) => {
  return (
    <>
      <TouchableOpacity style={[styles.itemContainer]} onPress={onItemPress}>
        {item.id == 1 && <Icon name={item.icon} size={StyleConfig.countPixelRatio(30)} color={COLORS.APP_PRIMARY} />}
        {item.title.length > 0 && <Text style={styles.titleText}>{item.title}</Text>}
      </TouchableOpacity>
      <View style={{ marginHorizontal:StyleConfig.countPixelRatio(16), height: item.showDevider ? 0.5 : 0, backgroundColor: COLORS.DRAWER_BORDER_COLOR }} />
    </>
  )
  
}

const SideMenu = ({ navigation, ...props})=> {
 

  /*
  .##....##....###....##.....##.####..######......###....########.####..#######..##....##..######.
  .###...##...##.##...##.....##..##..##....##....##.##......##.....##..##.....##.###...##.##....##
  .####..##..##...##..##.....##..##..##.........##...##.....##.....##..##.....##.####..##.##......
  .##.##.##.##.....##.##.....##..##..##...####.##.....##....##.....##..##.....##.##.##.##..######.
  .##..####.#########..##...##...##..##....##..#########....##.....##..##.....##.##..####.......##
  .##...###.##.....##...##.##....##..##....##..##.....##....##.....##..##.....##.##...###.##....##
  .##....##.##.....##....###....####..######...##.....##....##....####..#######..##....##..######.
  */
  

  const _onItemPress = (item) => {
    if (item.id == 1) {
      console.log(props)
      navigation.closeDrawer()
    } else if(item.id == 7){

    } else if(item.id == 8){

    } else {
      navigation.navigate(item.action);
    }
  }


  /*
  ..######...#######..##.....##.########...#######..##....##.########.##....##.########..######.
  .##....##.##.....##.###...###.##.....##.##.....##.###...##.##.......###...##....##....##....##
  .##.......##.....##.####.####.##.....##.##.....##.####..##.##.......####..##....##....##......
  .##.......##.....##.##.###.##.########..##.....##.##.##.##.######...##.##.##....##.....######.
  .##.......##.....##.##.....##.##........##.....##.##..####.##.......##..####....##..........##
  .##....##.##.....##.##.....##.##........##.....##.##...###.##.......##...###....##....##....##
  ..######...#######..##.....##.##.........#######..##....##.########.##....##....##.....######.
  */
  return (
    <View style={styles.container}> 
      <SafeAreaView>
      <FlatList
        data={dataJson}
          renderItem={({ item, index }) => <SideBarItem item={item} onItemPress={()=>_onItemPress(item)} />}
        />
        </SafeAreaView>
    </View>
  )
  
}

export default SideMenu

const styles = {
  container: {
    flex: 1,
    width: WIDTH * 0.8,
    backgroundColor: COLORS.WHITE,
    //paddingHorizontal: 40
  },
  itemContainer: {
    paddingHorizontal: StyleConfig.countPixelRatio(20),
    paddingVertical: StyleConfig.countPixelRatio(10),
    //backgroundColor:'blue'
    
  },
  titleText: {
    fontSize: StyleConfig.countPixelRatio(17),
    fontFamily: FONTS.NERIS_REGULAR,
    fontWeight: '300',
    color: COLORS.DRAWER_TEXT_COLOR,
    lineHeight: StyleConfig.countPixelRatio(20)
    //backgroundColor:'green'
  }
}