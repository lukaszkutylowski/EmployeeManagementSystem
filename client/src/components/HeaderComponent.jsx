import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar-expand-nd navbar-dark bg-dark">
                        <div><a href="https://github.com/lukaszkutylowski" className="navbar-brand">&nbsp; Employee Management System</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;