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
