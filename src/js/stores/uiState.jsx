import { observable, action, computed, useStrict } from 'mobx';
import $ from 'jquery';
import Panel from './panel';

useStrict(true);


// One Store To Rule Them All.
class UIStateStore {
    @observable panels = [];

    // a lot of the computation of the spirographs need to know the height
    constructor() {
        $(window).resize(() => {
//            this.updateWindowDimensions();
        });
    }

    @action addPanel (params) {
        const newPanel = new Panel(this, params);
        this.panels.push(newPanel);
    }

    @action removePanel (panelID) {
        console.log(panelID);
        //this.panels.splice(this.panels.indexOf(panel), 1);
    }

    @action drawAll () {
        _.each(this.panels, (panel) => { panel.draw() });
    }
}

// exports a singleton store
export default new UIStateStore();
