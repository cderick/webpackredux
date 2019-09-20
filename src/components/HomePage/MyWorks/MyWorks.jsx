import React from 'react';
import PropTypes from 'prop-types';
import s from './MyWorks.scss';
import artWorks from '../../../../static/artworks.png';
import webProtos from '../../../../static/webprotos.png';
import PopupContent from './PopupContent/PopupContent';

class MyWorks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			overlayActive: false,
			popUpcontent: undefined,
		};
		this.handlePopupOverlay = this.handlePopupOverlay.bind(this);
		this.equalHeights = this.equalHeights.bind(this);
	}

	handlePopupOverlay() {
		this.setState({
			overlayActive: !this.state.overlayActive,
		}, () => {
			const body = document.querySelector('body');
			if (this.state.overlayActive) {
				body.style.overflow = 'hidden';
			} else {
				body.style.overflow = 'initial';
			}
		});
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.equalHeights);	
	}

	componentDidMount() {
		if (window.outerWidth && window.outerWidth > 499) {
			window.addEventListener('resize', this.equalHeights);
			setTimeout(() => {
				this.equalHeights();
			}, 600);
		}
	}

	equalHeights() {
		const findClass = document.getElementsByClassName('overflow-hidden');
		let tallest = 0;
		for (let i = 0; i < findClass.length; i++) {
			const ele = findClass[i];
			const eleHeight = ele.offsetHeight;
			tallest = (eleHeight > tallest ? eleHeight : tallest);
		}
		for (let i = 0; i < findClass.length; i++) {
			findClass[i].style.height = `${tallest}px`;
		}
	}

	render() {
		const { myWorks, mainWorks } = this.props;
		const { overlayActive } = this.state;
		return (
			<div id="myWorks" className={`container-fluid ${s.containerBackground}`}>
				<div className="row">
					<div className="col text-center">
						<h3 className="h1 pt-4 pb-3">{myWorks && myWorks.title}</h3>
					</div>
				</div>
				<div className="row">
					{myWorks && myWorks.cards
						&& myWorks.cards.map((cv, ind) => (
							<div key={`socialId${ind}`} className="col p-0 my-auto text-center">
								<div
									className={s.myCard}
									onClick={() => {
										this.setState({
											popUpcontent: cv.target,
										}, () => {
											this.handlePopupOverlay();
										});
									}}
								>
									<img className={s.imgResize} alt={cv.target === 'web' ? webProtos : artWorks} src={cv.target === 'web' ? webProtos : artWorks} />
									<div className="p-4 overflow-hidden">
										<h2 className="h2 pb-3">{cv.cardTitle && cv.cardTitle}</h2>
										<p>{cv.cardDescrip}</p>
										<div className={s.fakeButton}>{cv.buttonDescrip && cv.buttonDescrip} <i className="fas fa-chevron-right" /></div>
									</div>
								</div>
							</div>
						))}
					{overlayActive && (
						<PopupContent
							mainWorks={mainWorks}
							artWorks={this.props.artWorks}
							overlayActive={this.state.overlayActive}
							handlePopupOverlay={this.handlePopupOverlay}
							popUpcontent={this.state.popUpcontent}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default MyWorks;
