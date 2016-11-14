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

## License

MIT © [Sergey Lysenko](http://soulwish.info)
