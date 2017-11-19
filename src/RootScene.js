/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

import color from './widget/color'
import { screen, system, tool } from './common'
import TabBarItem from './widget/TabBarItem'

import HomeScene from './scene/Home/HomeScene'
import WordScene from './scene/Word/WordScene'
import FriendScene from './scene/Friends/FriendScene'
import MineScene from './scene/Mine/MineScene'


// const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

// create a component
class RootScene extends Component {
    constructor() {
        super()

        // StatusBar.setBarStyle('light-content')
    }

    render() {
        return (
            <Navigator
                // onNavigationStateChange={
                //     (prevState, currentState) => {
                //         const currentScene = getCurrentRouteName(currentState);
                //         const previousScene = getCurrentRouteName(prevState);
                //         if (previousScene !== currentScene) {
                //             if (lightContentScenes.indexOf(currentScene) >= 0) {
                //                 StatusBar.setBarStyle('light-content')
                //             } else {
                //                 StatusBar.setBarStyle('dark-content')
                //             }
                //         }
                //     }
                // }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_homepage.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_homepage_selected.png')}
                    />
                )
            }),
        },
        WordScene: {
            screen: WordScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '口碑',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_merchant.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_merchant_selected.png')}
                    />
                )
            }),
        },

        FriendScene: {
            screen: FriendScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '朋友',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_order.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_order_selected.png')}
                    />
                )
            }),
        },

        Mine: {
            screen: MineScene,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('./img/tabbar/pfb_tabbar_mine.png')}
                        selectedImage={require('./img/tabbar/pfb_tabbar_mine_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        },
    }

);

const Navigator = StackNavigator(
    {
        Tab: { screen: Tab },

    },
    {
        navigationOptions: {
            headerStyle: { backgroundColor: color.theme }
            // headerBackTitle: null,
            // headerTintColor: '#333333',
            // showIcon: true,
        },
    }
);
//make this component available to the app
export default RootScene;
