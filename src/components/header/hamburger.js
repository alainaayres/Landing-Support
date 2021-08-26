import React, { Component } from 'react';
import "./hamburger.css"

class Hamburger extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            active: false
        };
    }

    onClick() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    };

    render() {
        return (
            <div className='container-fluid'>
            <section className="p-menu1">
                <nav id="navbar" className="navigation" role="navigation">
                    <input id="toggle1" type="checkbox" />
                    <label className="hamburger1" for="toggle1">
                    <div className="top"></div>
                    <div className="meat"></div>
                    <div className="bottom"></div>
                    </label>
                
                    <nav className="menu1">
                    <a className="link1" href="">Our Models</a>
                    <a className="link1" href="">Specialties</a>
                    <a className="link1" href="">About</a>
                    <a className="link1" href="">Blog</a>
                    <a className="lin1 kbutton-nav" href="">Contact</a>
                    </nav>
                </nav>
            </section>
            </div>
        )
    }
}

export default Hamburger;
