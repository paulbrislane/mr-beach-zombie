import React from 'react';
import './App.scss';

function App() {
  return (
    <main>
      <section className="head">
        <div className="crown">
          <div className="crown__peak-rear"></div>
          <div className="crown__peak-rear-cap"></div>
          <div className="crown__peak-right"></div>
          <div className="crown__peak-right-cap"></div>
          <div className="crown__peak-right-depth"></div>
          <div className="crown__peak-1"></div>
          <div className="crown__peak-1-depth"></div>
          <div className="crown__peak-1-cap"></div>
          <div className="crown__peak-2"></div>
          <div className="crown__peak-2-cap"></div>
          <div className="crown__peak-divider"></div>
        </div>
        <div className="face-patch"></div>
        <div className="face">
          <div className="face__splat"></div>
          <div className="face__splat-ring"></div>
          <div className="face__mark"></div>
          <div className="face__mark-1"></div>
          <div className="face__mark-2"></div>
        </div>
        <div className="left-eye">
          <div className="left-eye__green-circle"></div>
          <div className="left-eye__green-circle-detail"></div>
          <div className="left-eye__bags"></div>
          <div className="left-eye__bags-3"></div>
          <div className="left-eye__bags-2"></div>
          <div className="left-eye__sclera"></div>
          <div className="left-eye__iris"></div>
          <div className="left-eye__highlight"></div>
          <div className="left-eye__highlight-2"></div>
        </div>
        <div className="right-eye">
          <div className="right-eye__green-circle"></div>
          <div className="right-eye__green-circle-detail"></div>
          <div className="right-eye__bags"></div>
          <div className="right-eye__bags-detail"></div>
          <div className="right-eye__bags-2"></div>
          <div className="right-eye__sclera"></div>
          <div className="right-eye__iris"></div>
          <div className="right-eye__pupil"></div>
          <div className="right-eye__highlight"></div>
          <div className="right-eye__highlight-2"></div>
        </div>
        <div className="mouth">
          <div className="mouth__right"></div>
        </div>
      </section>
      <section className="body"></section>
      <section className="arm-right">
        <div className="arm-right__upper"></div>
        <div className="arm-right__lower"></div>
        <div className="arm-right__stump"></div>
      </section>

      <section className="arm-left">
        <div className="arm-left__upper"></div>
        <div className="arm-left__lower"></div>
        <div className="arm-left__thumb"></div>
        <div className="arm-left__hand"></div>
        <div className="arm-left__hand-inner"></div>
        <div className="arm-left__hand-spot"></div>
        <div className="arm-left__hand-spot-1"></div>
        <div className="arm-left__finger-1"></div>
        <div className="arm-left__finger-1a"></div>
        <div className="arm-left__finger-2"></div>
        <div className="arm-left__finger-2a"></div>
        <div className="arm-left__finger-3"></div>
        <div className="arm-left__finger-3a"></div>
      </section>
    </main>
  );
}

export default App;
