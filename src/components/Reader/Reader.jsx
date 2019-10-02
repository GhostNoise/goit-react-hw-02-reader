import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Reader.module.css';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    actualPage: 0,
  };

  handlePage = event => {
    const { name } = event.target;

    this.setState(prevState => ({
      actualPage:
        name === 'previous'
          ? prevState.actualPage - 1
          : prevState.actualPage + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { actualPage } = this.state;

    return (
      <div className={style.reader}>
        <Publication item={items[actualPage]} />

        <Counter actualPage={actualPage + 1} length={items.length} />
        <Controls
          actualPage={actualPage}
          handlePage={this.handlePage}
          length={items.length}
        />
      </div>
    );
  }
}
