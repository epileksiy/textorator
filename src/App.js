import React from 'react';
//import connect from '@vkontakte/vk-connect';
import './App.css';
import Icon28KeyboardOutline from '@vkontakte/icons/dist/28/keyboard_outline';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';
import Icon28LightbulbStarOutline from '@vkontakte/icons/dist/28/lightbulb_star_outline';
import {View,Epic,Tabbar,TabbarItem,Panel,PanelHeader} from '@vkontakte/vkui/dist';
import '@vkontakte/vkui/dist/vkui.css';
import Textorator from "./panels/panelTextorator";
import Aboutpanel from "./panels/Aboutpanel";
import Randomizer from "./panels/Randomizer";

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'textorator',
			isclicked: false
		};

		this.onStoryChange = this.onStoryChange.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	onStoryChange (e) {
		this.setState({activeStory: e.currentTarget.dataset.story})
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Сочинение отправлено: ' + this.state.value);
		event.preventDefault();
	}

	render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'textorator'}
						data-story="textorator"
					>
						<Icon28KeyboardOutline/>
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'randomizer'}
						data-story="randomizer"
					>
						<Icon28LightbulbStarOutline/>
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'about'}
						data-story="about"
					>
						<Icon28InfoOutline/>
					</TabbarItem>
				</Tabbar>
			}>

				<View id="textorator" activePanel="textorator">
					<Panel id="textorator">
						<PanelHeader>Textorator</PanelHeader>
						<Textorator isclicked={this.state.isclicked} />
					</Panel>
				</View>

				<View id="randomizer" activePanel="randomizer">
					<Panel id="randomizer">
						<PanelHeader>Randomizer</PanelHeader>
						<Randomizer/>
					</Panel>
				</View>

				<View id="about" activePanel="about">
					<Panel id="about">
						<PanelHeader>О сервисе</PanelHeader>
						<Aboutpanel/>
					</Panel>
				</View>
			</Epic>
		)
	}
}
export default App;

