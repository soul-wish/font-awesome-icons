const got = require('got');
const YAML = require('yamljs');
const oPick = require('object.pick');
const backupList = require('./data/icons.json');

const getIcons = () => got('fontawesome.com/v4.7.0/icons.yml')
    .then(response => YAML.parse(response.body.icons))
    .catch(() => backupList.icons);

const printVersion = data => `${data[data.length - 1].created}.x`;

const cleanUpObjectsArray = (data, fields) => data.map(icon => oPick(icon, fields));

const getCategoriesObject = (data, fields = []) => {
    const categories = {};
    data.forEach((icon) => {
        icon.categories.forEach((category) => {
            if (!{}.hasOwnProperty.call(categories, category)) {
                categories[category] = [];
            }
            categories[category].push(oPick(icon, fields));
        });
    });
    return categories;
};

const getCategoriesArray = (data, fields) => {
    const categoriesObject = getCategoriesObject(data, fields);
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

module.exports.getList = getIcons;

module.exports.version = () =>
    new Promise((resolve) => {
        getIcons()
            .then(data => resolve(printVersion(data)))
            .catch(() => resolve(printVersion(backupList.icons)));
    });

module.exports.getCategories = fields =>
    new Promise((resolve) => {
        getIcons()
            .then(data => resolve(getCategoriesArray(data, fields)))
            .catch(() => resolve(getCategoriesArray(backupList.icons, fields)));
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
            .then(data => resolve(cleanUpObjectsArray(data, fields)))
            .catch(() => resolve(cleanUpObjectsArray(backupList.icons, fields)));
    });
