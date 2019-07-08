import React from 'react';

class Image extends React.Component {
  onError = () => { }

  render() {
    return (
      <img
        onError={this.onError}
        width="100%"
        src={this.props.url}
        alt=""
      />
    );
  }
};

export default Image;
