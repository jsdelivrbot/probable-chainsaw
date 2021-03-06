import React from 'react';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  constructor() {
    super();

    this.addFish = this.addFish.bind(this);
    this.addSampleFishes = this.addSampleFishes.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    const fishes = { ...this.state.fishes };
    const timeStamp = Date.now();

    fishes[`fish-${timeStamp}`] = fish;

    this.setState({ fishes: fishes });
  }

  addSampleFishes() {
    this.setState({ fishes: sampleFishes });
  }

  addToOrder(key) {
    const order = { ...this.state.order };

    order[key] = order[key] + 1 || 1;

    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafoot Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          addSampleFishes={this.addSampleFishes}
        />
      </div>
    );
  }
}

export default App;
