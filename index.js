const got = require('got');
const YAML = require('yamljs');
const backupList = require('./data/icons.json');

module.exports.getList = () => got('fontawesome.io/icons.yml')
    .then(response => YAML.parse(response.body.icons))
    .catch(() => backupList.icons);
