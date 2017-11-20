import { always, ifElse, equals, prop } from 'ramda';
import SortByDomPositionPlugin from 'roving-tabindex-element-list/src/plugins/sort-by-dom-position';
import PreventWrappingPlugin from 'roving-tabindex-element-list/src/plugins/prevent-wrapping';
import NavigationLists from './navigation-lists';

/**
 * Keeps multiple NavigationListMap that can be accessed by a string key
 */
const navigationListMap = new NavigationLists();

/**
 * Gets the key from the binding, or 'default
 * @function
 * @param {*} binding
 *
 * @return {string}
 */
const getKeyFromBinding = ifElse(equals('true'), always('default'), prop('value'));

/**
 * The keyboard directive object
 */
const navigationListDirective = {
  /**
   * Called only once, when the directive is first bound to the element.
   * @param {Element} el
   * @param {object} binding
   * @param {object} binding.modifiers
   * @param {boolean} binding.modifiers.keepsorted
   * @param {boolean} binding.modifiers.nowrap
   */
  bind(el, binding) {
    if (binding.modifiers.keepsorted) {
      navigationListMap.addPlugin(new SortByDomPositionPlugin());
    }
    if (binding.modifiers.nowrap) {
      navigationListMap.addPlugin(new PreventWrappingPlugin());
    }
    const key = getKeyFromBinding(binding);
    navigationListMap.registerElement(key, el);
  },

  /**
   * Called only once, when the directive is unbound from the element.
   * @param {Element} el
   * @param {object} binding
   */
  unbind(el, binding) {
    const key = getKeyFromBinding(binding);
    navigationListMap.unregisterElement(key, el);
  },
};

export default navigationListDirective;
