var path = require('path');
var defaults = {
    css: true,
    materialIcons: true
};
module.exports = function (moduleOptions) {
    var options = Object.assign({}, defaults, moduleOptions);
    // Add css
    if (options.css) {
        this.options.css.unshift('vuetify/dist/vuetify.css');
    }
    // Add Material Icons font
    if (options.materialIcons) {
        this.options.head.link.push({
            rel: 'stylesheet',
            type: 'text/css',
            href: '//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        });
    }
    // Remove module options
    var vuetifyOptions = Object.assign({}, options);
    delete vuetifyOptions.css;
    delete vuetifyOptions.materialIcons;
    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, '../plugins/vuetify.js'),
        fileName: 'vuetify.js',
        options: {
            vuetifyOptions: vuetifyOptions
        }
    });
};
module.exports.meta = require('../../package.json');
//# sourceMappingURL=vuetify.js.map