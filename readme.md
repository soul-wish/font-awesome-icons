# font-awesome-icons [![Build Status](https://travis-ci.org/soul-wish/font-awesome-icons.svg?branch=master)](https://travis-ci.org/soul-wish/font-awesome-icons)

> Returns actual list of Font Awesome icons


## Install

```
$ npm install --save font-awesome-icons
```


## Usage

```js
const faIcons = require('font-awesome-icons');

faIcons.getList().then(icons => console.log(icons.length));
//=> 675
```

## License

MIT © [Sergey Lysenko](http://soulwish.info)
