import React from 'react';

const FunctionalComponent = (props) => (
    <div>
        <div>Functional Component</div>
        <button onClick={props.changeComponentExample}>Click Me!</button>
    </div>
)

export default FunctionalComponent