import React from 'react';
import styled from 'styled-components';

const AppContainer = ({className}) => {
	const audioSummer = new Audio('./assets/sounds/summer.mp3')
	const audioRain = new Audio('./assets/sounds/rain.mp3')
	const audioWinter = new Audio('./assets/sounds/winter.mp3')

	document.body.style.transition = "background-image 0.5s"

	const onSummerAudioClick = () => {
		audioRain.load()
		audioWinter.load()
		if(audioSummer.paused) {
			audioSummer.play()
			document.body.style.background = "url('./assets/summer-bg.jpg')"
		} else {
			audioSummer.pause()
		}
	}

	const onRainAudioClick = () => {
		audioSummer.load()
		audioWinter.load()
		if(audioRain.paused) {
			audioRain.play()
			document.body.style.background = "url('./assets/rainy-bg.jpg')"
		} else {
			audioRain.pause()
		}
	}

	const onWinterAudioClick = () => {
		audioSummer.load()
		audioRain.load()
		if(audioWinter.paused) {
			audioWinter.play()
			document.body.style.background = "url('./assets/winter-bg.jpg')"
		} else {
			audioWinter.pause()
		}
	}

	return(
		<main className={className}>
			<h1>Weather Sounds</h1>
			<div className="weather-container">
				<div className="weather summer" onClick={onSummerAudioClick}>
					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
				</div>
				<div className="weather rain" onClick={onRainAudioClick}>
					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-rain"><line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path></svg>
				</div>
				<div className="weather winter" onClick={onWinterAudioClick}>
					<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cloud-snow"><path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line></svg>
				</div>
			</div>
		</main>
	);
};

export const App = styled(AppContainer)`
	h1 {
		text-align: center;
		margin-top: 100px;
		color: #fff;
	}

	.weather-container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 30px;
		margin-top: 50px;
	}

	.weather {
		width: 200px;
		height: 200px;
		border-radius: 10px;
		border: 3px solid #fff;
		cursor: pointer;
		display: flex;
		justify-content: center;
		align-items: center;
		transition-duration: 0.2s;
	}

	.summer {
		background: url('./assets/summer-bg.jpg') no-repeat center top / cover
	}

	.summer:hover {
		box-shadow: 0 0 20px #F4FF19;
	}

	.rain {
		background: url('./assets/rainy-bg.jpg') no-repeat center top / cover
	}

	.rain:hover {
		box-shadow: 0 0 20px #3528FF;
	}

	.winter {
		background: url('./assets/winter-bg.jpg') no-repeat center top / cover
	}

	.winter:hover {
		box-shadow: 0 0 20px #fff;
	}
`;
