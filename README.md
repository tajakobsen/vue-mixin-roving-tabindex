# VueJS roving tabindex mixin

[![npm version](https://badge.fury.io/js/vue-mixin-roving-tabindex.svg)](https://badge.fury.io/js/vue-mixin-roving-tabindex)

A VueJS mixin for handling roving tabindex

## Usage

Add `v-navigation-list="<list-name>"` to elements, to create a roving tabindex for the elements with the same `<list-name>`.

*Example:*

```html
<template>
  <div>
    <ul>
      <li v-navigation-list="'myList'">Element 1</li>
      <li v-navigation-list="'myList'">Element 2</li>
      <li v-navigation-list="'myList'">Element 3</li>
    </ul>
    
    <ul>
      <li v-navigation-list="'myOtherList'">Element 4</li>
      <li v-navigation-list="'myOtherList'">Element 5</li>
    </ul>
  </div>
</template>
<script>
  import rovingTabIndexMixin from 'vue-mixin-roving-tabindex'

  export default {
    mixins: [rovingTabIndexMixin],
    data: () => ({})
  }
</script>
```

In the example above there are two seperate roving tabindex lists (`myList` and `myOtherList`);

## Modifiers

Note that the modifiers is applied to he whole list, not individual elements. But you should apply them to every element
in the list for consistency.

### Available modifiers

 * `keepsorted` - Will keep the element list sorted based on the position of an element in the dom
 * `nowrap` - Will prevent the tabindex 

*Example:*

```html
<div v-navigation-list.keepsorted.nowrap="`interrestingList`"></div>
```

## Licence

This librariy is licenced with the [MIT Licence](LICENCE)
