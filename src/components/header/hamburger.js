import React, { Component } from 'react';
import "./hamburger.css";
import bootstrap from 'bootstrap'

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
                <nav id="navbar" className="navigation" role="navigation" style={{ justifyContent: 'left' }}>
                    <input id="toggle1" type="checkbox" />
                    <label className="hamburger1" for="toggle1">
                    <div className="top"></div>
                    <div className="meat"></div>
                    <div className="bottom"></div>
                    </label>
                
                    <nav className="menu1" style={{ justifyItems: 'left' }}>
                    <a className=" text-uppercase link1" href="" style={{ textAlign: 'left', marginBottom: '10px' }}>Products</a>
                     <hr class="solid" style={{ marginBottom: '10px' }}/>
                    <a className="text-uppercase link1" href="" style={{ textAlign: 'left', marginBottom: '10px' }}>Support</a>
                    <hr className="solid" style={{ marginBottom: '10px' }} />
                    <a className="text-uppercase link1" href="" style={{ textAlign: 'left', marginBottom: '10px' }}>About</a>
                    <hr className="solid" style={{ marginBottom: '10px' }}/>
                    <a  href='https://prismsoftware.com/contact-us/'>
                        <button className='text-uppercase btn-u btn-u-blue' style={{ padding: '0px 5px 0px 5px' }}>
                            Schedule a Demo
                        </button>
                    </a>

                    </nav>
                </nav>
            </section>
            </div>
        )
    }
}

export default Hamburger;
