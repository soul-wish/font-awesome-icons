import test from 'ava';
import icons from './';
import iconsBackup from './data/icons.json';

test('Check amount of icons for latest FA version', async (t) => {
    const faIcons = await icons.getList();
    t.is(faIcons.length, 675);
});

test('Check if backup and latest FA icons are the same', async (t) => {
    const faIcons = await icons.getList();
    t.deepEqual(faIcons, iconsBackup.icons);
});

test('Check the version of FA', async (t) => {
    const faVersion = await icons.version();
    t.is(faVersion, '4.7.x');
});

test('Check amount of categories', async (t) => {
    const faCategories = await icons.getCategories();
    t.is(faCategories.length, 16);
});

test('Check that first category is called "Web Application Icons"', async (t) => {
    const faCategories = await icons.getCategories();
    t.is(faCategories[0].name, 'Web Application Icons');
});

test('Check amount of icons in "Web Application Icons" category', async (t) => {
    const faCategory = await icons.getIconsByCategory('Web Application Icons');
    t.is(faCategory.length, 374);
});

test('Non-existing category name should return empty erray', async (t) => {
    const faCategory = await icons.getIconsByCategory('Hello FA');
    t.is(faCategory.length, 0);
});

test('getListByKeys should return simplified objects', async (t) => {
    const faIcons = await icons.getListByKeys(['name', 'unicode']);
    t.deepEqual(faIcons[0], { name: 'Glass', unicode: 'f000' });
});
