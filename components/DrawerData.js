import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Drawer,Text} from 'react-native-paper';
import {  DrawerItem} from '@react-navigation/drawer';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from "./DrwaerData.style"


const colored = '#ffffff';
const s1 = 20;
const s2 = 18;


export function DrawerData(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.drawerContainer}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="align-vertical-distribute"
                color={colored}
                size={s1}
              /> 
            )}
            onPress={() => {props.navigation.closeDrawer()}}
            label={() => (<></>)} 
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcon
                name="category"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("Category") }}
            label={() => (<Text style={styles.drawertexts}>Category</Text>)} 
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="account"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("About") }}
            label={() => (<Text style={styles.drawertexts}>About</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="android-messages"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => {props.navigation.navigate("Messages")  }}
            label={() => (<Text style={styles.drawertexts}>Messages</Text>)} 
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MatIcon
                name="settings"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => { props.navigation.navigate("Settings") }}
            label={() => (<Text style={styles.drawertexts}>Settings</Text>)}
            
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name="arrow-right-circle"
                color={colored}
                size={s1}
              />
            )}
            onPress={() => { props.navigation.navigate("Roles") }}
            label={() => (<Text style={styles.drawertexts}>Roles</Text>)}  
          />
        </Drawer.Section>
        </View>

      <Drawer.Section style={styles.bottomDrawer}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="help"
              color={colored}
              size={s1}
            />
          )}
          onPress={() => { props.navigation.navigate("Help") }}
          label={() => (<Text style={styles.drawertexts}>Help</Text>)} 
        />
      </Drawer.Section>
    </View>
  );
}

