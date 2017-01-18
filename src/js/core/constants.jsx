export default {
    PANEL_DEFAULTS: {
        currTab: 'general',
        innerCircleSizePercentage: 50,
        pointFromCenterPercentage: 50,
        speed: 150,
        lineThickness: 1,
        lineTransparency: 0.5,
        lineColorHex: '#0044cc',
        lineColor: {
            r: 50,
            g: 150,
            b: 255
        }
    },

    // the panels that show up in the app on load
    DEFAULT_PANEL_CUSTOMIZATIONS: [
        {
            speed: 50,
            pointFromCenterPercentage: 20,
            innerCircleSizePercentage: 20,
            lineColorHex: "#007bc9"
        },
        {
            speed: 80,
            pointFromCenterPercentage: 50,
            innerCircleSizePercentage: 50,
            lineTransparency: 0.2,
            lineColorHex: "#10ad00",
            lineColor: {
                r: 220,
                g: 5,
                b: 15
            }
        },
        {
            speed: 250,
            pointFromCenterPercentage: 88,
            innerCircleSizePercentage: 60,
            lineThickness: 1,
            lineColorHex: "#bf0404",
            lineColor: {
                r: 20,
                g: 15,
                b: 220
            }
        }
    ]

};
