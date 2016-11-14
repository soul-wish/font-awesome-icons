const got = require('got');
const YAML = require('yamljs');
const backupList = require('./data/icons.json');

const getIcons = () => got('fontawesome.io/icons.yml')
    .then(response => YAML.parse(response.body.icons))
    .catch(() => backupList.icons);

const printVersion = data => `${data[data.length - 1].created}.x`;

module.exports.getList = getIcons;

module.exports.version = () =>
    new Promise((resolve, reject) => {
        getIcons()
            .then(data => resolve(printVersion(data)))
            .catch(() => reject(printVersion(backupList.icons)));
    });
