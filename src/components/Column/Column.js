import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  state = {
		cards: this.props.cards || []
	};
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
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
  addCard(title) {
		this.setState((state) => ({
			cards: [
				...state.cards,
				{
					key: state.cards.length,
				}
			]
		}));
	}
}

export default Column