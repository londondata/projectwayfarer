import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.svg'


class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted size='large'>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>
        <Menu.Item name='Best Wayfarer' active={activeItem === 'Best Wayfarer'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='signin' active={activeItem === 'signin'} onClick={this.handleItemClick}>
            Sign In
          </Menu.Item>

          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
            Sign Up
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

export default Nav
