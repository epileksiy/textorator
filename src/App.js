import React from 'react';
//import connect from '@vkontakte/vk-connect';
import './App.css';
import Icon28Newsfeed from '@vkontakte/icons/dist/28/newsfeed';
import Icon28Search from '@vkontakte/icons/dist/28/search';
import {View,Epic,Tabbar,TabbarItem,Panel,PanelHeader} from '@vkontakte/vkui/dist';
import '@vkontakte/vkui/dist/vkui.css';
import Textorator from "./panels/panelTextorator";

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
					><Icon28Newsfeed/>
					</TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'about'}
						data-story="about"
					><Icon28Search/></TabbarItem>
				</Tabbar>
			}>
				<View id="textorator" activePanel="textorator">
					<Panel id="textorator">
						<PanelHeader>Do `dat shit</PanelHeader>
						<Textorator isclicked={this.state.isclicked} />
					</Panel>
				</View>

				<View id="about" activePanel="about">
					<Panel id="about">
						<PanelHeader>О приложении</PanelHeader>
					</Panel>
				</View>
			</Epic>
		)
	}
}
export default App;

