import React from 'react';
import PropTypes from 'prop-types';
import s from './Navigation.scss';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav(e) {
		if (e) {
			const substract = document.querySelector('#myTopnav').offsetHeight;
			const target = document.querySelector(`#${e}`).offsetTop;
			window.scrollTo({
				top: target - substract,
				behavior: 'smooth',
			});
		}
	}


	render() {
		const { navItems } = this.props;
		return (
			<nav className={s.topnav} id="myTopnav">
				{navItems && navItems.length
				&& navItems.map((cv, ind) => 
					<a key={`key-${ind}`} className={`${cv.classes && cv.classes} ${ind === 0 && s.stencil}`} id={cv.id} onClick={() => { this.toggleNav(cv.target); }} href="javascript:void(0)">{cv.title}</a>)}
			</nav>
		);
	}
}

Navigation.propTypes = {
	navigation: PropTypes.func,
};

export default Navigation;
