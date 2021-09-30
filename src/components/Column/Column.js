import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  

  static propTypes = {
    icon: PropTypes.string,
    cards: PropTypes.array,
    title: PropTypes.string,
    children: PropTypes.node,
    addCard: PropTypes.func,
  };
  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { icon, title, cards, addCard } = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title} title={title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        {cards.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
        <Creator
          text={settings.cardCreatorText}
          action={addCard}
        />
      </section>
    );
  }
}

export default Column;
