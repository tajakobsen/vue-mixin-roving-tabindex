import NavigationList from 'roving-tabindex-element-list';


export default class NavigationListMap {
  constructor() {
    /**
     * Keeps multiple NavigationLists that can be accessed by a string key
     * @property {object.<string, NavigationList>}
     */
    this.navigationLists = {};

    /**
     * A list of plugins that will be added to to new NavigationLists
     * @property {NavigationListPlugin[]}
     */
    this.plugins = [];
  }

  /**
   * Adds a plugin that will be applied to new NavigationLists
   *
   * @param {NavigationListPlugin} plugin
   */
  addPlugin(plugin) {
    this.plugins.push(plugin);
  }

  /**
   * Registers an element with a navigation list
   *
   * @param {string} key
   * @param {Element} element
   */
  registerElement(key, element) {
    this.ensureNavigationListExists(key);
    this.navigationLists[key].registerElement(element);
  }

  /**
   * Un-registers an element with a navigation list
   *
   * @param {string} key
   * @param {Element} element
   */
  unregisterElement(key, element) {
    this.navigationLists[key].unregisterElement(element);
  }

  /**
   * Creates a new NavigationList on a key if it doesn't exist
   * @param {string} key
   */
  ensureNavigationListExists(key) {
    if (!this.navigationLists[key]) {
      this.navigationLists[key] = new NavigationList({
        plugins: this.plugins,
      });
    }
  }
}
