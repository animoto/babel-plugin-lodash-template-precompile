# babel-plugin-lodash-template-precompile
Babel plugin to precompile Lodash templates

## Install

```shell
$ npm i --save-dev babel-plugin-lodash-template-precompile
```

## Example

Transforms
```js
import template from 'lodash/template';

export default template`<div>hello {{ user }}!</div>`
```

to
```js
export default function (data) {
  var __t,
      __p = '';

  __p += '<div>hello ' + ((__t = user) == null ? '' : __t) + '!</div>';
  return __p;
};
```

## Usage

###### via .babelrc (Recommended)
```json
{
  "plugins": [["lodash-template-precompile", {"interpolate" : "\\{\\{(.+?)\\}\\}", "evaluate" : "\\[\\[(.+?)\\]\\]", "variable": "data"}]],
  "presets": ["es2015"]
}
```

###### via Babel CLI
```sh
$ babel --plugins lodash-template-precompile --presets es2015 script.js
```

###### via Babel API
```js
require('babel-core').transform('code', {
  'plugins': [["lodash-template-precompile", {"interpolate" : "\\{\\{(.+?)\\}\\}", "evaluate" : "\\[\\[(.+?)\\]\\]", "variable": "data"}]],
  'presets': ['es2015']
});
```