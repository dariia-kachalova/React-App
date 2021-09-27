import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  };
  
  static propTypes = {
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    children: PropTypes.node,
  };

  addCard(title) {
    this.setState((state) => ({
      cards: [
        ...state.cards,
        {
          key: state.cards.length,
        },
        {
          title,
          key: state.cards.length,
        },
      ],
    }));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title} title={this.props.title}>
          {this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon} />
          </span>
        </h3>
        {this.state.cards.map(({ key, ...cardProps }) => <Card key={key} {...cardProps} />)}
        <Creator text={settings.cardCreatorText} action={(title) => this.addCard(title)} />
      </section>
    );
  }
  
}

export default Column;