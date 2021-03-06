import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Navigation } from 'components';

import './SiteNavigation.scss';
class SiteNavigation extends Component {
  render() {
    return (
      <Navigation className={classNames('site-navigation')}>        
        <NavLink exact to="/" activeClassName="active-nav">Home</NavLink>
        <NavLink to="/about" activeClassName="active-nav">about</NavLink>
      </Navigation>
    )
  }
}

export default SiteNavigation;
