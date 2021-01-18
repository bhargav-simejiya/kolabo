// Global imports
import React, { Component } from 'react'
import { TouchableOpacity, Text, Image, View, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
// File imports
import COLORS from '../../Helper/Colors'
import { WIDTH } from '../../Helper/Constants'
import FONTS from '../../Helper/Fonts'
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
    action: "ContactUSScreen",
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
    action: "AppVersionScreen",
    showDevider: true
  },
  {
    id: 8,
    title: "Log Off",
    icon: null,
    action: "LogOffScreen",
    showDevider: false
  },
]

const SideBarItem = ({ item, ...props }) => {
  return (
    <>
      <TouchableOpacity style={[styles.itemContainer]}>
        {item.id == 1 && <Icon name={item.icon} size={30} color="#900" />}
        {item.title.length > 0 && <Text style={styles.titleText}>{item.title}</Text>}
      </TouchableOpacity>
      <View style={{ marginHorizontal:16, height: item.showDevider ? 0.5 : 0, backgroundColor: COLORS.DRAWER_BORDER_COLOR }} />
    </>
  )
  
}

class SideMenu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}> 
        <SafeAreaView>
        <FlatList
          data={dataJson}
          renderItem={({ item, index }) => <SideBarItem item={item} {...this.props}/>}
          />
          </SafeAreaView>
      </View>
    )
  }
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    //backgroundColor:'blue'
    
  },
  titleText: {
    fontSize: 16,
    fontFamily: FONTS.NERIS_REGULAR,
    fontWeight: '300',
    color: COLORS.DRAWER_TEXT_COLOR
    //backgroundColor:'green'
  }
}