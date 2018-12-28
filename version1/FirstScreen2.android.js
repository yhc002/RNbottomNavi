import React from 'react';
import { View, StyleSheet, Image, WebView } from 'react-native';
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';
import Icon1Event from "../Scenes/Icon1Event";
import Icon2Event from "../Scenes/Icon2Event";

//import Icon from '@expo/vector-icons/MaterialCommunityIcons'

export default class App extends React.Component {
    state = {
        activeTab: 'games'
    }

    tabs = [
        {
            key: 'games',
            label: 'Games',
            barColor: '#388E3C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'add-box'
        },
        {
            key: 'movies-tv',
            label: 'Movies & TV',
            barColor: '#00695C',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'add-circle'
        },
        {
            key: 'music',
            label: 'Music',
            barColor: '#6A1B9A',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'add'
        },
        {
            key: 'books',
            label: 'Books',
            barColor: '#1565C0',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'add'
        }
    ]

    state = {
        activeTab: this.tabs[0].key
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={30} color="black" name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <IconTab
            isActive={isActive}
            showBadge={tab.key === 'movies-tv'}
            renderBadge={() => <Badge>2</Badge>}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
    )

    renderScene(key) {
        switch (key) {
            case 'games': return (<Icon1Event/>); break;
            case 'movies-tv': return (<Icon2Event/>); break;
            case 'music': return (<Icon1Event/>); break;
            case 'books': return (<Icon2Event/>);
        }

    }
//
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
{/*
                <WebView
                    source={{uri: 'https://www.naver.com'}}
                    style={{marginTop: 0}}
                />
*/}
                {this.renderScene(this.state.activeTab)}


                <BottomNavigation
                    tabs={this.tabs}
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                    useLayoutAnimation
                />
            </View>
        )
    }
}