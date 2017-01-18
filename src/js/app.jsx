import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import store from './stores/uiState';
import Header from './components/header';
import Panels from './components/panels';
import C from './core/constants';


class App extends React.Component {

    // populate the store with the default panels
    constructor (props) {
        super(props);

        _.each(C.DEFAULT_PANEL_CUSTOMIZATIONS, (panel) => {
            const settings = Object.assign({}, C.PANEL_DEFAULTS, panel);
            props.store.addPanel(settings);
        });
    }

    render () {
        const { store } = this.props;
        return (
            <div className="body-content">
                <Header addPanel={store.addPanel} drawAll={store.drawAll} />
                <Panels store={store} />
            </div>
        )
    }
}

// initialize the whole shebang
ReactDOM.render(<App store={store} />, document.getElementById('app'));
