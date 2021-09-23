import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import Column from '../Column/Column';
class List extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      children: PropTypes.node,
      source: PropTypes.string.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
      }
    render() {
      return (
        <section className={styles.component}>
        <Hero background={this.props.image} titleText={this.props.title} />
        {this.props.children}
        <div className={styles.columns}>
          <Column title='firstColumn'>First</Column>
          <Column title='secondColumn'>Second</Column>
          <Column title='thirdColumn'>Third</Column>
        </div>
        </section>
      )
    }
  }
export default List;