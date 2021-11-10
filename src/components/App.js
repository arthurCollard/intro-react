import React from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent/FunctionComponent';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classComponentExample: true
    }
  }

  changeComponentExample = () => {
    const { classComponentExample } = this.state;
    this.setState({classComponentExample: !classComponentExample})
  }
  
  render() {
    return (
      <>
        {this.state.classComponentExample ? <ClassComponent changeComponentExample={this.changeComponentExample}/> : <FunctionalComponent changeComponentExample={this.changeComponentExample}></FunctionalComponent>}
      </>
    );
  }
  
}

export default App;
