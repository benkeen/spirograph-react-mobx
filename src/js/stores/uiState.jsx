import { observable, action, computed, useStrict } from 'mobx';
import $ from 'jquery';
import _ from 'lodash';
import Panel from './panel';
import C from '../core/constants';

useStrict(true);


// One Store To Rule Them All.
class UIStateStore {
    @observable panels = [];

    // a lot of the computation of the spirographs need to know the width/height of the available canvas space
    // this would 
    constructor() {
        $(window).resize(() => {
            // ...
        });
    }

    @action.bound addPanel (params = C.PANEL_DEFAULTS) {
        const newPanel = new Panel(this, params);
        this.panels.push(newPanel);
    }

    @action.bound removePanel (panelID) {
        this.panels.splice(_.findIndex(this.panels, { id: panelID }), 1);
    }

    @action.bound drawAll () {
        _.each(this.panels, (panel) => { panel.draw() });
    }
}

// exports a singleton store
export default new UIStateStore();
