# font-awesome-icons [![Build Status](https://travis-ci.org/soul-wish/font-awesome-icons.svg?branch=master)](https://travis-ci.org/soul-wish/font-awesome-icons)

> Returns actual list of Font Awesome icons (plain JS array)


## Install

```
$ npm install --save font-awesome-icons
```


## Usage

```js
const faIcons = require('font-awesome-icons');

faIcons.getList().then(icons => console.log(icons.length));
//=> 675

faIcons.getList().then(icons => console.log(icons[0]));
/*=>
{ name: 'Glass',
  id: 'glass',
  unicode: 'f000',
  created: 1,
  filter: [ 'martini', 'drink', 'bar', 'alcohol', 'liquor' ],
  categories: [ 'Web Application Icons' ]
}
*/
```

### API

### .getList()

Type: `function`

Returns a promise with a full list of actual Font Awesome icons.

### .version()

Type: `function`

Returns a promise with an actual version of Font Awesome.

### .getCategories(arrayOfNeededKeys)

Type: `function`

arrayOfNeededKeys - optional parameter with array of needed keys for icons (eg: `['name', 'unicode']`)

Returns a promise with a categories array.

```js
[
    {
        name: 'Web Application Icons',
        icons: [
            {
                name: 'Glass',
                id: 'glass',
                unicode: 'f000',
                created: 1,
                filter: [ 'martini', 'drink', 'bar', 'alcohol', 'liquor' ],
                categories: [ 'Web Application Icons' ]
            },
            ...
        ]
    },
    ...
]
```

### .getIconsByCategory(categoryName)

Type: `function`

Returns a promise with array of icons in needed category.

### .getListByKeys(arrayOfNeededKeys)

Type: `function`

Returns a promise with a full list of Font Awesome icons with needed keys only.

```js
const faIcons = require('font-awesome-icons');

faIcons.getListByKeys(['name', 'unicode']).then(icons => console.log(icons[0]));
//=> { name: 'Glass', unicode: 'f000' }
```

## Related

[font-awesome-v5-icons](https://github.com/soul-wish/font-awesome-v5-icons) – separate package for Font Awesome v5


## License

MIT © [Sergey Lysenko](http://soulwish.info)
