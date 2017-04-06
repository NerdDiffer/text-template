import React, { Component } from 'react';
import '../styles/App.css';
import TemplateForm from './TemplateForm'
import templatize from '../utils/template'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      interpolated: ''
    }
  }

  updateInterpolated = (template, person) => {
    const interpolated = templatize(template, person)
    this.setState({ interpolated })
  }

  render() {
    return (
      <div className="App">
        <TemplateForm update={this.updateInterpolated} />
        <p>
          {this.state.interpolated}
        </p>
      </div>
    );
  }
}

export default App;
