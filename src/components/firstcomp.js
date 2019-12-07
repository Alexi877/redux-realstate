import React, {Component} from 'react';


class Layout extends Component {
	constructor () {
		super()
		this.state = {
			name:'Joe',
			health:20,
			level:1,
			lowLevelClass:'danger-red'
		}
	}
	render() {
		return(
			<div id="parent">
				<div className={`blue-bg ${(this.state.health<55) ? this.state.lowLevelClass : '' } `}>
				<h1>Hey</h1>
				<Header />
				<img src="img/bape.png" alt="main" />
				</div>
			</div>
			)
	}
}
var Header = function () {
	return(
	<header>
	<ul> 
		<li>Home</li>
		<li>About</li>
		<li>Contact</li>
	</ul>
	</header>
		)
}
export default Layout;