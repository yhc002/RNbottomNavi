import React, {Component} from 'react';
import { View, StyleSheet} from 'react-native';
import BottomNavigation, {
    IconTab,
    Badge
} from 'react-native-material-bottom-navigation';
import { Icon } from 'react-native-elements';
import Icon1Event from "./Scenes/Icon1Event";
import Icon2Event from "./Scenes/Icon2Event";
import Icon3Event from "./Scenes/Icon3Event";
import Icon4Event from "./Scenes/Icon4Event";
import Icon5Event from "./Scenes/Icon5Event"
//import Icon from '@expo/vector-icons/MaterialCommunityIcons'


export default class MainPage extends Component {
    constructor(props){
        super(props)
    }
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
        },
        {
            key: 'bonus',
            label: 'Bonus',
            barColor: '#1C0',
            pressColor: 'rgba(255, 0, 255, 0.16)',
            icon: 'add'
        }
    ]

    state = {
        activeTab: this.tabs[0].key,
        orderList: [{name:"MockName", destination:"mockDest"}]
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
            case 'movies-tv': return (<Icon2Event orderList={this.state.orderList}/>); break;
            case 'music': return (<Icon3Event/>); break;
            case 'books': return (<Icon4Event orderList={this.state.orderList}/>); break;
            case 'bonus': return (<Icon5Event onLogoutPressDirect={() => this.props.onLogoutPress()}/>); break;
            default: console.warn("error or not implemented");
        }

    }
//
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
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

/*

            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style = {{flex:0.93}}>

                    {this.renderScene(this.state.activeTab)}
                </View>
                <View style = {{flex:0.07,justifyContent: 'flex-end', marginBottom: 0}}>
                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                        renderTab={this.renderTab}
                        useLayoutAnimation
                    />
                </View>
            </View>




            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
                    {this.renderScene(this.state.activeTab)}
                    <BottomNavigation
                        tabs={this.tabs}
                        activeTab={this.state.activeTab}
                        onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                        renderTab={this.renderTab}
                        useLayoutAnimation
                    />
            </View>
*/