Package.describe({
    name: 'risul:plivo-web-sdk',
    summary: 'Plivo Web SDK (WebRTC library) for Meteor',
    version: '1.0.7',
    git: 'https://github.com/risul/meteor-plivo-web-sdk'
});

Package.on_use(function (api) {
    api.versionsFrom('METEOR@0.9.2.2');
    api.use(['jquery']);
    api.add_files(['lib/plivo-web-sdk.js', 'lib/export.js'], 'client');
    api.export('Plivo', 'client');
});