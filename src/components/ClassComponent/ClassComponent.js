import React from 'react';

class ClassComponent extends React.Component {
    render() {
        return (
            <div>
                <div>Class Component</div>
                <button onClick={this.props.changeComponentExample}>Click Me!</button>
            </div>
        )
    }
}

export default ClassComponent