import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const JumbotronComponent = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello, world!</h1>
        <p>{props.children}</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
export default JumbotronComponent;