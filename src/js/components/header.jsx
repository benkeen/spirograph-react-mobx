import React from 'react';


class Header extends React.Component {
    render () {
        const { drawAll, addPanel } = this.props;

        return (
            <header id="navbar">
                <div className="navbar">
                    <div className="navbar-inner">
                        <div style={{ width: 'auto' }} className="container">
                            <a href="#" className="brand">Spirograph</a>
                            <div className="nav-collapse">
                                <ul className="nav pull-right">
                                    <li><a href="https://github.com/benkeen/spirograph-react-mobx">Github</a></li>
                                    <li className="divider-vertical" />
                                    <li><a href="#" onClick={(e) => drawAll()}>Draw all</a></li>
                                    <li><a href="#" onClick={(e) => addPanel()}>Add &raquo;</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
