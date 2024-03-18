import React from 'react';
import './App.scss';
import Carousel from './components/Carousel';

interface State {
  images: string[];
  step?: number;
  frameSize?: number;
  itemWidth?: number;
  animationDuration?: number;
}

class App extends React.Component<{}, State> {
  state = {
    images: [
      './img/1.png',
      './img/2.png',
      './img/3.png',
      './img/4.png',
      './img/5.png',
      './img/6.png',
      './img/7.png',
      './img/8.png',
      './img/9.png',
      './img/10.png',
    ],
    step: 3,
    frameSize: 3,
    itemWidth: 130,
    animationDuration: 1000,
  };

  handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      itemWidth: +event.target.value,
    }));
  };

  handleFrameSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      frameSize: +event.target.value,
    }));
  };

  handleStepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      step: +event.target.value,
    }));
  };

  handleAnimationDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      animationDuration: +event.target.value,
    }));
  };

  handleInfinite = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prevState => ({
      ...prevState,
      infinite: event.target.checked,
    }));
  };

  render() {
    const { images, step, frameSize, itemWidth, animationDuration } =
      this.state;

    return (
      <div className="App">
        {/* eslint-disable-next-line */}
        <h1 data-cy='title'>Carousel with {this.state.images.length} images</h1>
        <div className="inputs">
          <label htmlFor="#itemWidth">Item width:</label>
          <input
            id="itemWidth"
            type="number"
            min="130"
            max="300"
            step="10"
            value={itemWidth}
            onChange={this.handleWidthChange}
          />
          <label htmlFor="#frameSize">Frame size:</label>
          <input
            id="frameSize"
            type="number"
            min="3"
            max="10"
            value={frameSize}
            onChange={this.handleFrameSize}
          />
          <label htmlFor="#step">Step:</label>
          <input
            id="step"
            type="number"
            min="1"
            max="10"
            value={step}
            onChange={this.handleStepChange}
          />
          <label htmlFor="#animationDuration">Animation duration:</label>
          <input
            id="animationDuration"
            type="number"
            min="1000"
            max="10000"
            value={animationDuration}
            onChange={this.handleAnimationDuration}
          />
        </div>
        <Carousel
          images={images}
          step={step}
          frameSize={frameSize}
          itemWidth={itemWidth}
          animationDuration={animationDuration}
        />
      </div>
    );
  }
}

export default App;
