import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
    MenuUl,
    MenuLi,
    MenuSubUl,
    MenuSubLi
} from './styles';
class MenuDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onOpenDropDown() {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        console.log(this.state.open)
        return (
            <MenuUl>
                <MenuLi>
                    <a onClick={()=>this.onOpenDropDown()}>Category</a>
                    <MenuSubUl open={this.state.open}>
                        <MenuSubLi><NavLink to="/">Home</NavLink></MenuSubLi>
                        <MenuSubLi><NavLink to="/">Home</NavLink></MenuSubLi>
                        <MenuSubLi><NavLink to="/">Home</NavLink></MenuSubLi>
                    </MenuSubUl>
                </MenuLi>
                <MenuLi><NavLink to="/todo">Todo</NavLink></MenuLi>
            </MenuUl>
        );
    }
}

export default MenuDropdown;