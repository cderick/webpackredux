import React from 'react';
import PropTypes from 'prop-types';
import s from './AboutMe.scss';
import heroSmall from '../../../../static/hero-small.png';

class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { aboutMe } = this.props;
		return (
			<div id="aboutMe" className={`container-fluid ${s.containerBackground}`}>
				<div className={`row h-100 ${s.clearDisplay}`}>
					<div className="col my-auto p-0 text-center">
						<h2 className="h1 mb-4">{aboutMe && aboutMe.title && aboutMe.title}</h2>
						<hr />
						<div className="text-white text-justify pl-5 pr-5 mt-2">{aboutMe && aboutMe.subTitle && <div dangerouslySetInnerHTML={{ __html: aboutMe.subTitle }} />}</div>
					</div>
					<div className="col my-auto text-center">
						<img className="rounded-circle" alt={heroSmall} src={heroSmall} />
					</div>
				</div>
			</div>
		);
	}
}

AboutMe.propTypes = {
	aboutMe: PropTypes.objectOf(PropTypes.any),
};

AboutMe.defaultProps = {
	aboutMe: null,
};

export default AboutMe;
