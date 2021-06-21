import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title, subtitle }) => {
  return <header>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </header>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Header
