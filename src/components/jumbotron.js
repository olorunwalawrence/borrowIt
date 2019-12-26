import React from 'react';
import * as RC from '../Styles/jumbotron';
import { jumboPic } from '../assests/jumboPics';

const JumbotronImages = props => {
	return props.data.map((img, i) => (
		<RC.JumbtronImageCover key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
			<RC.JumbotronImage src={img} className="d-block w-100" alt="?" />
		</RC.JumbtronImageCover>
	));
};

const Indicators = props => {
	return props.data.map((img, i) => (
		<RC.JumbotronSliderLine
			key={i}
			data-target="#carouselExampleCaptions"
			data-slide-to={i}
			className={`${i === 0 ? 'active' : ''}`}
		/>
	));
};

export const Jumbotron = () => {
	return (
		<RC.JumbotronSection>
			<RC.JumbotronContainter
				id="carouselExampleFade"
				className="carousel slide carousel-fade"
				data-ride="carousel"
			>
				<RC.JumbotronSliderIndicator className="carousel-indicators">
					<Indicators data={jumboPic} />
				</RC.JumbotronSliderIndicator>
				<RC.JumbotronImageCont className="carousel-inner">
					<JumbotronImages data={jumboPic} />
				</RC.JumbotronImageCont>
				<RC.JumbotronButton
					className="carousel-control-prev"
					href="#carouselExampleFade"
					role="button"
					data-slide="prev"
				>
					<RC.JumbotronBtnSpan
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></RC.JumbotronBtnSpan>
					<RC.JumbotronBtnSpan className="sr-only">&LeftArrow;</RC.JumbotronBtnSpan>
				</RC.JumbotronButton>
				<RC.JumbotronButton
					className="carousel-control-next"
					href="#carouselExampleFade"
					role="button"
					data-slide="next"
				>
					<RC.JumbotronBtnSpan
						className="carousel-control-next-icon"
						aria-hidden="true"
					></RC.JumbotronBtnSpan>
					<RC.JumbotronBtnSpan className="sr-only">&RightArrow;</RC.JumbotronBtnSpan>
				</RC.JumbotronButton>
			</RC.JumbotronContainter>
		</RC.JumbotronSection>
	);
};
