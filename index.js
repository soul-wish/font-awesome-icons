const got = require('got');
const YAML = require('yamljs');
const oPick = require('object.pick');
const backupList = require('./data/icons.json');

const getIcons = () => got('fontawesome.io/icons.yml')
    .then(response => YAML.parse(response.body.icons))
    .catch(() => backupList.icons);

const printVersion = data => `${data[data.length - 1].created}.x`;

const getCategoriesObject = (data) => {
    const categories = {};
    data.forEach((icon) => {
        icon.categories.forEach((category) => {
            if (!{}.hasOwnProperty.call(categories, category)) {
                categories[category] = [];
            }
            categories[category].push(icon);
        });
    });
    return categories;
};

const getCategoriesArray = (data) => {
    const categoriesObject = getCategoriesObject(data);
    const categoriesArray = [];
    Object.keys(categoriesObject).forEach((key) => {
        categoriesArray.push({
            name: key,
            icons: categoriesObject[key],
        });
    });
    return categoriesArray;
};

const getIconsByCategoryName = (data, name) =>
    getCategoriesObject(data)[name] || [];

const cleanUpObject = (data, fields) => {
    return data.map(icon => oPick(icon, fields));
};

module.exports.getList = getIcons;

module.exports.version = () =>
    new Promise((resolve) => {
        getIcons()
            .then(data => resolve(printVersion(data)))
            .catch(() => resolve(printVersion(backupList.icons)));
    });

module.exports.getCategories = () =>
    new Promise((resolve) => {
        getIcons()
            .then(data => resolve(getCategoriesArray(data)))
            .catch(() => resolve(getCategoriesArray(backupList.icons)));
    });

module.exports.getIconsByCategory = categoryName =>
    new Promise((resolve) => {
        if (!categoryName) {
            return resolve([]);
        }
        return getIcons()
            .then(data => resolve(getIconsByCategoryName(data, categoryName)))
            .catch(() => resolve(getIconsByCategoryName(backupList.icons, categoryName)));
    });

module.exports.getListByKeys = fields =>
    new Promise((resolve) => {
        getIcons()
            .then(data => resolve(cleanUpObject(data, fields)))
            .catch(() => resolve(cleanUpObject(backupList.icons, fields)));
    });
