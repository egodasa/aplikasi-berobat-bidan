'use strict';

//
//
//
//

var script = {
    name: "alert",
    props: {
        type: { default: 'success', type: String }
    }
};

const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "alert", class: "alert-" + _vm.type }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

const __vue_template__ = typeof __vue_render__ !== 'undefined' ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ } : {};
/* style */
const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-3d9dcb71_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__ = "data-v-3d9dcb71";
/* module identifier */
const __vue_module_identifier__ = undefined;
/* functional template */
const __vue_is_functional_template__ = false;
/* component normalizer */
function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Alert/Alert.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Alert = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var AlertLink = {
    name: 'alert-link',
    props: {
        // href: {default: '', type: String},
        to: { default: true },
        label: { default: '', required: true, type: String },
        target: { default: false }
    },

    template: `<router-link class="alert-link" :target="false" :to="to">{{ label }}</router-link>`
};



var Alert$1 = /*#__PURE__*/Object.freeze({
    Alert: Alert,
    AlertLink: AlertLink
});

const isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;

const directive = {
    instances: [],
    events: isTouch ? ['touchstart', 'click'] : ['click']
};

directive.onEvent = function (event) {
    directive.instances.forEach(({ el, fn }) => {
        if (event.target !== el && !el.contains(event.target)) {
            fn && fn(event);
        }
    });
};

directive.bind = function (el, binding) {
    directive.instances.push({ el, fn: binding.value });
    if (directive.instances.length === 1) {
        directive.events.forEach(e => document.addEventListener(e, directive.onEvent));
    }
};

directive.update = function (el, binding) {
    if (typeof binding.value !== 'function') {
        throw new Error('Argument must be a function');
    }
    const instance = directive.instances.find(i => i.el === el);
    instance.fn = binding.value;
};

directive.unbind = function (el) {
    const instanceIndex = directive.instances.findIndex(i => i.el === el);
    if (instanceIndex >= 0) {
        directive.instances.splice(instanceIndex, 1);
    }
    if (directive.instances.length === 0) {
        directive.events.forEach(e => document.removeEventListener(e, directive.onEvent));
    }
};

var ClickOutSide = typeof window !== 'undefined' ? directive : {};

//
//
//
//
//

var script$1 = {
    name: "dropdown-menu",

    props: {
        show: { default: false },
        position: { default: 'left' }
    },

    computed: {
        className() {
            const className = {
                'dropdown-menu': true
            };

            className[`dropdown-menu-${this.position}`] = true;
            className[`dropdown-menu-arrow`] = true;
            className[`show`] = this.show;
            return className;
        }
    }
};

const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: _vm.className }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

const __vue_template__$1 = typeof __vue_render__$1 !== 'undefined' ? { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 } : {};
/* style */
const __vue_inject_styles__$1 = undefined;
/* scoped */
const __vue_scope_id__$1 = undefined;
/* module identifier */
const __vue_module_identifier__$1 = undefined;
/* functional template */
const __vue_is_functional_template__$1 = false;
/* component normalizer */
function __vue_normalize__$1(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Dropdown/DropdownMenu.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */
function __vue_create_injector__$1() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$1.styles || (__vue_create_injector__$1.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var DropdownMenu = __vue_normalize__$1(__vue_template__$1, __vue_inject_styles__$1, typeof __vue_script__$1 === 'undefined' ? {} : __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, typeof __vue_create_injector__$1 !== 'undefined' ? __vue_create_injector__$1 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var TButton = {
    name: 't-button',
    props: {
        size: { default: false },
        outline: { default: false },
        type: { default: 'primary' }
    },
    template: `<a :class="className"><slot>Button</slot></a>`,
    computed: {
        className() {
            const className = { btn: true };
            className[`btn-outline-${this.type}`] = this.outline;
            className[`btn-${this.type}`] = !this.outline;
            className[`btn-${this.size}`] = !!this.size;
            return className;
        }
    }
};

//

var script$2 = {
    name: "dropdown",
    props: {
        label: { default: 'Dropdown' },
        position: { default: 'left' }
    },
    data: () => ({
        show: false
    }),

    methods: {
        toggle() {
            this.show = !this.show;
        },
        open() {
            this.show = true;
        },
        close() {
            this.show = false;
        }
    },
    directives: { ClickOutside: ClickOutSide },
    components: {
        TButton,
        DropdownMenu }
};

const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.close,
      expression: "close"
    }],
    staticClass: "dropdown",
    on: { click: _vm.toggle }
  }, [_vm._t("dropdown-toggle", [_c("t-button", { attrs: { outline: true, "aria-expanded": _vm.show } }, [_vm._v("\n            " + _vm._s(_vm.label) + "\n        ")])]), _vm._v(" "), _c("dropdown-menu", { attrs: { position: _vm.position, show: _vm.show } }, [_vm._t("default")], 2)], 2);
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

const __vue_template__$2 = typeof __vue_render__$2 !== 'undefined' ? { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 } : {};
/* style */
const __vue_inject_styles__$2 = function (inject) {
  if (!inject) return;
  inject("data-v-4dd58dd9_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$2 = "data-v-4dd58dd9";
/* module identifier */
const __vue_module_identifier__$2 = undefined;
/* functional template */
const __vue_is_functional_template__$2 = false;
/* component normalizer */
function __vue_normalize__$2(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Dropdown/Dropdown.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$2() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$2.styles || (__vue_create_injector__$2.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Dropdown = __vue_normalize__$2(__vue_template__$2, __vue_inject_styles__$2, typeof __vue_script__$2 === 'undefined' ? {} : __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, typeof __vue_create_injector__$2 !== 'undefined' ? __vue_create_injector__$2 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var Icon = {
  name: 'icon',
  props: {
    icon: { required: true, type: String },
    prefix: { default: 'fe', type: String }
  },
  template: `<i :class="className"></i>`,
  computed: {
    className() {
      const className = {};
      className[`${this.prefix}`] = true;
      className[`${this.prefix}-${this.icon}`] = true;
      return className;
    }
  }
};

//

var script$3 = {
    components: { Icon },
    name: "dropdown-menu-item",
    props: {
        icon: { default: false },
        iconPrefix: { default: 'fe' },
        label: { default: 'Dropdown Item' },
        badge: { default: false },
        type: { default: 'primary' }
    }
};

const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [_vm._t("default", [!!_vm.badge ? _c("span", { staticClass: "float-right" }, [_c("span", { class: "badge badge-" + _vm.type }, [_vm._v(_vm._s(_vm.badge))])]) : _vm._e(), _vm._v(" "), !!_vm.icon ? _c("icon", {
    staticClass: "dropdown-icon",
    attrs: { icon: _vm.icon, prefix: _vm.iconPrefix }
  }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")])], 2);
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

const __vue_template__$3 = typeof __vue_render__$3 !== 'undefined' ? { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 } : {};
/* style */
const __vue_inject_styles__$3 = function (inject) {
  if (!inject) return;
  inject("data-v-7ec4afdf_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$3 = "data-v-7ec4afdf";
/* module identifier */
const __vue_module_identifier__$3 = undefined;
/* functional template */
const __vue_is_functional_template__$3 = false;
/* component normalizer */
function __vue_normalize__$3(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Dropdown/DropdownMenuItem.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$3() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$3.styles || (__vue_create_injector__$3.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var DropdownMenuItem = __vue_normalize__$3(__vue_template__$3, __vue_inject_styles__$3, typeof __vue_script__$3 === 'undefined' ? {} : __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, typeof __vue_create_injector__$3 !== 'undefined' ? __vue_create_injector__$3 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var DropdownDivider = {
    name: 'dropdown-divider',
    template: `<div class="dropdown-divider"></div>`
};

//

var script$4 = {
    components: {
        DropdownDivider,
        DropdownMenuItem,
        Dropdown },
    name: "account-dropdown"
};

const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("dropdown", { attrs: { position: "right" } }, [_c("template", { slot: "dropdown-toggle" }, [_c("a", { staticClass: "nav-link pr-0 leading-none" }, [_c("span", {
    staticClass: "avatar",
    staticStyle: {
      "background-image": 'url("./demo/faces/female/25.jpg")'
    }
  }), _vm._v(" "), _c("span", { staticClass: "ml-2 d-none d-lg-block" }, [_c("span", { staticClass: "text-default" }, [_vm._v("Jane Pearson")]), _c("small", { staticClass: "text-muted d-block mt-1" }, [_vm._v("Administrator")])])])]), _vm._v(" "), _c("dropdown-menu-item", { attrs: { icon: "user", label: "Profile" } }), _vm._v(" "), _c("dropdown-menu-item", {
    attrs: { icon: "settings", label: "Settings" }
  }), _vm._v(" "), _c("dropdown-menu-item", {
    attrs: { icon: "mail", label: "Inbox", badge: "6" }
  }), _vm._v(" "), _c("dropdown-menu-item", { attrs: { icon: "send", label: "Message" } }), _vm._v(" "), _c("dropdown-divider"), _vm._v(" "), _c("dropdown-menu-item", {
    attrs: { icon: "help-circle", label: "Need help?" }
  }), _vm._v(" "), _c("dropdown-menu-item", {
    attrs: { icon: "log-out", label: "Sign out" }
  })], 2);
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

const __vue_template__$4 = typeof __vue_render__$4 !== 'undefined' ? { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 } : {};
/* style */
const __vue_inject_styles__$4 = function (inject) {
  if (!inject) return;
  inject("data-v-68ac9923_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$4 = "data-v-68ac9923";
/* module identifier */
const __vue_module_identifier__$4 = undefined;
/* functional template */
const __vue_is_functional_template__$4 = false;
/* component normalizer */
function __vue_normalize__$4(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/AccountDropdown.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$4() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$4.styles || (__vue_create_injector__$4.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var AccountDropdown = __vue_normalize__$4(__vue_template__$4, __vue_inject_styles__$4, typeof __vue_script__$4 === 'undefined' ? {} : __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, typeof __vue_create_injector__$4 !== 'undefined' ? __vue_create_injector__$4 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var Avatar = {
    name: 'avatar',
    props: {
        /**
         * Avatar image url
         */
        imageUrl: { required: true, type: String },

        /**
         * Status color
         * Component will only show status if this option is defined
         */
        statusColor: { default: '', type: String }
    },

    template: `<div class="avatar d-block" :style="avatarStyle"><span v-if="hasStatus" class="avatar-status" :class="statusClassName"></span></div>`,

    computed: {
        /**
         * Generates css style to avatar component
         * @returns {{backgroundImage: string}}
         */
        avatarStyle() {
            return {
                backgroundImage: `url(${this.imageUrl})`
            };
        },

        /**
         * Generates classes to avatar status
         * @returns {{}}
         */
        statusClassName() {
            const className = {};
            className[`bg-${this.statusColor}`] = this.hasStatus;
            return className;
        },

        /**
         * Returns true if status is defined and otherwise false
         * @returns {boolean}
         */
        hasStatus() {
            return this.statusColor !== '';
        }
    }
};

//
//
//
//
//
//
//
//
//
//

var script$5 = {
    name: "card-header",
    props: {
        title: { default: '', type: String }
    }
};

const __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card-header" }, [_vm._t("default", [_c("h3", { staticClass: "card-title" }, [_vm._v(_vm._s(_vm.title))])]), _vm._v(" "), _vm._m(0)], 2);
};
var __vue_staticRenderFns__$5 = [function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card-options" }, [_c("a", {
    staticClass: "card-options-collapse",
    attrs: { href: "#", "data-toggle": "card-collapse" }
  }, [_c("i", { staticClass: "fe fe-chevron-up" })]), _vm._v(" "), _c("a", {
    staticClass: "card-options-remove",
    attrs: { href: "#", "data-toggle": "card-remove" }
  }, [_c("i", { staticClass: "fe fe-x" })])]);
}];
__vue_render__$5._withStripped = true;

const __vue_template__$5 = typeof __vue_render__$5 !== 'undefined' ? { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 } : {};
/* style */
const __vue_inject_styles__$5 = function (inject) {
  if (!inject) return;
  inject("data-v-2e6203ec_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$5 = "data-v-2e6203ec";
/* module identifier */
const __vue_module_identifier__$5 = undefined;
/* functional template */
const __vue_is_functional_template__$5 = false;
/* component normalizer */
function __vue_normalize__$5(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Card/CardHeader.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$5() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$5.styles || (__vue_create_injector__$5.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var CardHeader = __vue_normalize__$5(__vue_template__$5, __vue_inject_styles__$5, typeof __vue_script__$5 === 'undefined' ? {} : __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, typeof __vue_create_injector__$5 !== 'undefined' ? __vue_create_injector__$5 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//

var script$6 = {
    name: "card-footer"
};

const __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card-footer" }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

const __vue_template__$6 = typeof __vue_render__$6 !== 'undefined' ? { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 } : {};
/* style */
const __vue_inject_styles__$6 = function (inject) {
  if (!inject) return;
  inject("data-v-0cab7373_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$6 = "data-v-0cab7373";
/* module identifier */
const __vue_module_identifier__$6 = undefined;
/* functional template */
const __vue_is_functional_template__$6 = false;
/* component normalizer */
function __vue_normalize__$6(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Card/CardFooter.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$6() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$6.styles || (__vue_create_injector__$6.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var CardFooter = __vue_normalize__$6(__vue_template__$6, __vue_inject_styles__$6, typeof __vue_script__$6 === 'undefined' ? {} : __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, typeof __vue_create_injector__$6 !== 'undefined' ? __vue_create_injector__$6 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//

var script$7 = {
    name: "card-body"
};

const __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card-body" }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

const __vue_template__$7 = typeof __vue_render__$7 !== 'undefined' ? { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 } : {};
/* style */
const __vue_inject_styles__$7 = function (inject) {
  if (!inject) return;
  inject("data-v-c8cd9dcc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$7 = "data-v-c8cd9dcc";
/* module identifier */
const __vue_module_identifier__$7 = undefined;
/* functional template */
const __vue_is_functional_template__$7 = false;
/* component normalizer */
function __vue_normalize__$7(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Card/CardBody.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$7() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$7.styles || (__vue_create_injector__$7.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var CardBody = __vue_normalize__$7(__vue_template__$7, __vue_inject_styles__$7, typeof __vue_script__$7 === 'undefined' ? {} : __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, typeof __vue_create_injector__$7 !== 'undefined' ? __vue_create_injector__$7 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$8 = {
    name: "card",
    props: {
        title: { default: '', type: String },
        footer: { default: '', type: String },
        body: { default: '', type: String }
    },
    components: {
        CardBody,
        CardFooter,
        CardHeader
    }
};

const __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "card" }, [_vm._t("default", [_vm.title ? _c("card-header", [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _vm._v(" "), _c("card-body", [_vm._v(_vm._s(_vm.body))]), _vm._v(" "), _vm.footer ? _c("card-footer", [_vm._v(_vm._s(_vm.footer))]) : _vm._e()])], 2);
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

const __vue_template__$8 = typeof __vue_render__$8 !== 'undefined' ? { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 } : {};
/* style */
const __vue_inject_styles__$8 = function (inject) {
  if (!inject) return;
  inject("data-v-4a737dee_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$8 = "data-v-4a737dee";
/* module identifier */
const __vue_module_identifier__$8 = undefined;
/* functional template */
const __vue_is_functional_template__$8 = false;
/* component normalizer */
function __vue_normalize__$8(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Card/Card.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$8() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$8.styles || (__vue_create_injector__$8.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Card = __vue_normalize__$8(__vue_template__$8, __vue_inject_styles__$8, typeof __vue_script__$8 === 'undefined' ? {} : __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, typeof __vue_create_injector__$8 !== 'undefined' ? __vue_create_injector__$8 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});



var Card$1 = /*#__PURE__*/Object.freeze({
    Card: Card,
    CardBody: CardBody,
    CardFooter: CardFooter,
    CardHeader: CardHeader
});

var Container = {
    name: 'container',
    props: {
        maxWidth: 0
    },
    template: `<div class="container"><slot/></div>`,
    computed: {
        style() {
            const style = { maxWidth: this.maxWidth };
            return style;
        }
    }
};



var Dropdown$1 = /*#__PURE__*/Object.freeze({
    Dropdown: Dropdown,
    DropdownDivider: DropdownDivider,
    DropdownMenu: DropdownMenu,
    DropdownMenuItem: DropdownMenuItem
});

var GridCol = {
    name: 'grid-col',
    props: {
        xs: { default: 0 },
        sm: { default: 0 },
        md: { default: 0 },
        lg: { default: 0 },
        xl: { default: 0 }
    },
    template: `<div :class="className"><slot/></div>`,
    computed: {
        className() {
            const className = {};
            className[`col-xs${this.xs ? '-' + this.xs : ''}`] = this.xs !== 0;
            className[`col-sm${this.sm ? '-' + this.sm : ''}`] = this.sm !== 0;
            className[`col-md${this.md ? '-' + this.md : ''}`] = this.md !== 0;
            className[`col-lg${this.lg ? '-' + this.lg : ''}`] = this.lg !== 0;
            className[`col-xl${this.xl ? '-' + this.xl : ''}`] = this.xl !== 0;
            return className;
        }
    }
};

var GridRow = {
    name: 'grid-row',
    props: {
        /**
         * Mark as true if this row contains cards
         */
        cards: { default: false, types: Boolean }
    },

    computed: {
        className() {
            const classNames = { row: true };
            classNames['row-cards'] = this.cards !== false;
            return classNames;
        }
    },
    template: `<div :class="className"><slot/></div>`
};



var Grid = /*#__PURE__*/Object.freeze({
    GridCol: GridCol,
    GridRow: GridRow
});

//
//
//
//
//
//

var script$9 = {
    name: "t-nav",
    props: {
        tabbed: { default: false }
    },
    computed: {
        className() {
            const className = { nav: true };
            className[`nav-tabs`] = this.tabbed !== false;
            return className;
        }
    }
};

const __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("ul", { class: _vm.className }, [_vm._t("default")], 2);
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

const __vue_template__$9 = typeof __vue_render__$9 !== 'undefined' ? { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 } : {};
/* style */
const __vue_inject_styles__$9 = function (inject) {
  if (!inject) return;
  inject("data-v-5da8c706_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$9 = "data-v-5da8c706";
/* module identifier */
const __vue_module_identifier__$9 = undefined;
/* functional template */
const __vue_is_functional_template__$9 = false;
/* component normalizer */
function __vue_normalize__$9(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Nav/Nav.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$9() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$9.styles || (__vue_create_injector__$9.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Nav = __vue_normalize__$9(__vue_template__$9, __vue_inject_styles__$9, typeof __vue_script__$9 === 'undefined' ? {} : __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, typeof __vue_create_injector__$9 !== 'undefined' ? __vue_create_injector__$9 : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var TagWrapper = {
    name: 'tag-wrapper',
    functional: true,
    props: {
        tag: { default: 'div', types: String }
    },

    render(h, { children, props, data }) {
        return h(props.tag, {
            class: data.staticClass
        }, children);
    }
};

//
var script$a = {
    name: "nav-item",
    props: {
        tag: { default: 'li', type: String },
        active: { default: false, type: Boolean },
        label: { default: '', type: String },
        icon: { default: '', type: String },
        iconPrefix: { default: 'fe', type: String },
        to: { default: '' }
    },

    data: () => ({
        dropdownVisible: false
    }),

    methods: {
        onClick(e) {
            e.preventDefault();
            if (this.hasSubItems) {
                this.toggleDropdown();
            } else {
                this.$router.push(this.to);
            }
        },

        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible;
        },

        hideDropdown() {
            this.dropdownVisible = false;
        }
    },

    computed: {
        className() {
            const className = { 'nav-link': true };
            return className;
        },

        iconClassName() {
            const iconClass = {};
            iconClass[`${this.iconPrefix}`] = true;
            iconClass[`${this.iconPrefix}-${this.icon}`] = true;
            return iconClass;
        },

        hasSubItems() {
            return 'default' in this.$slots;
        }
    },
    components: {
        DropdownMenu,
        TagWrapper
    },
    directives: {
        ClickOutSide
    }
};

const __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("tag-wrapper", { staticClass: "nav-item", attrs: { tag: _vm.tag } }, [_c("a", {
    directives: [{
      name: "click-out-side",
      rawName: "v-click-out-side",
      value: _vm.hideDropdown,
      expression: "hideDropdown"
    }],
    class: _vm.className,
    on: { click: _vm.onClick }
  }, [_vm.icon ? _c("icon", { attrs: { icon: _vm.icon, prefix: _vm.iconPrefix } }) : _vm._e(), _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")], 1), _vm._v(" "), _c("dropdown-menu", { attrs: { show: _vm.dropdownVisible } }, [_vm._t("default")], 2)], 1);
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

const __vue_template__$a = typeof __vue_render__$a !== 'undefined' ? { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a } : {};
/* style */
const __vue_inject_styles__$a = function (inject) {
  if (!inject) return;
  inject("data-v-22d1f8b7_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$a = "data-v-22d1f8b7";
/* module identifier */
const __vue_module_identifier__$a = undefined;
/* functional template */
const __vue_is_functional_template__$a = false;
/* component normalizer */
function __vue_normalize__$a(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Nav/NavItem.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$a() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$a.styles || (__vue_create_injector__$a.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var NavItem = __vue_normalize__$a(__vue_template__$a, __vue_inject_styles__$a, typeof __vue_script__$a === 'undefined' ? {} : __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, typeof __vue_create_injector__$a !== 'undefined' ? __vue_create_injector__$a : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});



var Nav$1 = /*#__PURE__*/Object.freeze({
    Nav: Nav,
    NavItem: NavItem
});

//
var script$b = {
    name: "notifications",
    components: {
        Dropdown,
        DropdownMenu,
        DropdownMenuItem,
        DropdownDivider
    }
};

const __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("dropdown", { staticClass: "d-none d-md-flex", attrs: { position: "right" } }, [_c("template", { slot: "dropdown-toggle" }, [_c("a", { staticClass: "nav-link icon" }, [_c("i", { staticClass: "fe fe-bell" }), _vm._v(" "), _c("span", { staticClass: "nav-unread" })])]), _vm._v(" "), _c("dropdown-menu-item", { staticClass: "d-flex" }, [_c("span", {
    staticClass: "avatar mr-3 align-self-center",
    staticStyle: { "background-image": "url(demo/faces/male/41.jpg)" }
  }), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Nathan")]), _vm._v(" pushed new commit: Fix page load performance issue.\n            "), _c("div", { staticClass: "small text-muted" }, [_vm._v("10 minutes ago")])])]), _vm._v(" "), _c("dropdown-menu-item", { staticClass: "d-flex" }, [_c("span", {
    staticClass: "avatar mr-3 align-self-center",
    staticStyle: { "background-image": "url(demo/faces/female/1.jpg)" }
  }), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Alice")]), _vm._v(" started new task: Tabler UI design.\n            "), _c("div", { staticClass: "small text-muted" }, [_vm._v("1 hour ago")])])]), _vm._v(" "), _c("dropdown-menu-item", { staticClass: "d-flex" }, [_c("span", {
    staticClass: "avatar mr-3 align-self-center",
    staticStyle: { "background-image": "url(demo/faces/female/18.jpg)" }
  }), _vm._v(" "), _c("div", [_c("strong", [_vm._v("Rose")]), _vm._v(" deployed new version of NodeJS REST Api V3\n            "), _c("div", { staticClass: "small text-muted" }, [_vm._v("2 hours ago")])])]), _vm._v(" "), _c("dropdown-divider"), _vm._v(" "), _c("dropdown-menu-item", { staticClass: "text-center text-muted-dark" }, [_vm._v("\n        Mark all as read\n    ")])], 2);
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

const __vue_template__$b = typeof __vue_render__$b !== 'undefined' ? { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b } : {};
/* style */
const __vue_inject_styles__$b = function (inject) {
  if (!inject) return;
  inject("data-v-233f2b82_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$b = "data-v-233f2b82";
/* module identifier */
const __vue_module_identifier__$b = undefined;
/* functional template */
const __vue_is_functional_template__$b = false;
/* component normalizer */
function __vue_normalize__$b(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Notifications.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$b() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$b.styles || (__vue_create_injector__$b.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Notifications = __vue_normalize__$b(__vue_template__$b, __vue_inject_styles__$b, typeof __vue_script__$b === 'undefined' ? {} : __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, typeof __vue_create_injector__$b !== 'undefined' ? __vue_create_injector__$b : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//
//
//

var script$c = {
    name: "page-wrapper"
};

const __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "my-3 my-md-5" }, [_c("container", [_vm._t("default")], 2)], 1);
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

const __vue_template__$c = typeof __vue_render__$c !== 'undefined' ? { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c } : {};
/* style */
const __vue_inject_styles__$c = function (inject) {
  if (!inject) return;
  inject("data-v-39488f46_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$c = "data-v-39488f46";
/* module identifier */
const __vue_module_identifier__$c = undefined;
/* functional template */
const __vue_is_functional_template__$c = false;
/* component normalizer */
function __vue_normalize__$c(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Page/PageWrapper.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$c() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$c.styles || (__vue_create_injector__$c.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var PageWrapper = __vue_normalize__$c(__vue_template__$c, __vue_inject_styles__$c, typeof __vue_script__$c === 'undefined' ? {} : __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, typeof __vue_create_injector__$c !== 'undefined' ? __vue_create_injector__$c : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//

var script$d = {
    name: "page-header",
    props: {
        title: { default: '', type: String }
    }
};

const __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "page-header" }, [_c("h1", { staticClass: "page-title" }, [_vm._v(_vm._s(_vm.title))])]);
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

const __vue_template__$d = typeof __vue_render__$d !== 'undefined' ? { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d } : {};
/* style */
const __vue_inject_styles__$d = function (inject) {
  if (!inject) return;
  inject("data-v-491f1772_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$d = "data-v-491f1772";
/* module identifier */
const __vue_module_identifier__$d = undefined;
/* functional template */
const __vue_is_functional_template__$d = false;
/* component normalizer */
function __vue_normalize__$d(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Page/PageHeader.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$d() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$d.styles || (__vue_create_injector__$d.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var PageHeader = __vue_normalize__$d(__vue_template__$d, __vue_inject_styles__$d, typeof __vue_script__$d === 'undefined' ? {} : __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, typeof __vue_create_injector__$d !== 'undefined' ? __vue_create_injector__$d : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$e = {
    name: "page",
    props: {
        title: { default: '', type: String }
    },
    components: {
        PageHeader,
        PageWrapper
    }
};

const __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("page-wrapper", [_c("page-header", { attrs: { title: _vm.title } }), _vm._v(" "), _vm._t("default")], 2);
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

const __vue_template__$e = typeof __vue_render__$e !== 'undefined' ? { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e } : {};
/* style */
const __vue_inject_styles__$e = function (inject) {
  if (!inject) return;
  inject("data-v-041d0d9e_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$e = "data-v-041d0d9e";
/* module identifier */
const __vue_module_identifier__$e = undefined;
/* functional template */
const __vue_is_functional_template__$e = false;
/* component normalizer */
function __vue_normalize__$e(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Page/Page.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$e() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$e.styles || (__vue_create_injector__$e.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var Page = __vue_normalize__$e(__vue_template__$e, __vue_inject_styles__$e, typeof __vue_script__$e === 'undefined' ? {} : __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, typeof __vue_create_injector__$e !== 'undefined' ? __vue_create_injector__$e : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});



var Page$1 = /*#__PURE__*/Object.freeze({
    Page: Page,
    PageHeader: PageHeader,
    PageWrapper: PageWrapper
});

var ProgressBar = {
    name: 'progress-bar',
    props: {
        /**
         * Size of the progressbar [xs, md, lg, xl]
         */
        size: { default: '', type: String },

        /**
         * Percentage of the progress (0 - 100)
         */
        progress: { default: 0, type: Number },

        color: { default: 'yellow', type: String }
    },

    template: ` <div class="progress" :class="progressClassName">
                    <div role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" class="progress-bar" :class="progressBarClassName" :style="progressBarStyle"></div>
                </div>`,

    computed: {
        progressClassName() {
            const className = {};
            className[`progress-${this.size}`] = true;
            return className;
        },

        progressBarClassName() {
            const className = {};
            className[`bg-${this.color}`] = true;
            return className;
        },

        progressBarStyle() {
            return {
                width: `${this.progress}%`
            };
        }
    }
};

//

var script$f = {
    name: "progress-card",
    props: {
        title: { required: true, type: String },
        total: { required: true, type: String },
        progress: { required: true, type: Number },
        progressColor: { default: 'green', type: String }
    },
    components: {
        CardBody,
        Card,
        ProgressBar
    }
};

const __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("card", [_c("card-body", { staticClass: "text-center" }, [_c("div", { staticClass: "h5" }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("div", { staticClass: "display-4 font-weight-bold mb-4" }, [_vm._v(_vm._s(_vm.total))]), _vm._v(" "), _c("progress-bar", {
    attrs: {
      size: "sm",
      color: _vm.progressColor,
      progress: _vm.progress
    }
  })], 1)], 1);
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

const __vue_template__$f = typeof __vue_render__$f !== 'undefined' ? { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f } : {};
/* style */
const __vue_inject_styles__$f = function (inject) {
  if (!inject) return;
  inject("data-v-5c5f7b0c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$f = "data-v-5c5f7b0c";
/* module identifier */
const __vue_module_identifier__$f = undefined;
/* functional template */
const __vue_is_functional_template__$f = false;
/* component normalizer */
function __vue_normalize__$f(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/ProgressCard.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$f() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$f.styles || (__vue_create_injector__$f.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var ProgressCard = __vue_normalize__$f(__vue_template__$f, __vue_inject_styles__$f, typeof __vue_script__$f === 'undefined' ? {} : __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, typeof __vue_create_injector__$f !== 'undefined' ? __vue_create_injector__$f : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$g = {
    name: "site-header",
    props: {
        imageUrl: { default: '/' },
        href: { default: '' },
        alt: { default: 'Tabler Vue' }
    },

    methods: {
        toggleMenu(e) {
            e.preventDefault();
            this.$emit('toggle-menu');
        }
    }
};

const __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "header py-4" }, [_c("container", [_c("div", { staticClass: "d-flex" }, [_vm._t("site-logo", [_c("site-logo", {
    attrs: {
      "image-url": _vm.imageUrl,
      href: _vm.href,
      alt: _vm.alt
    }
  })]), _vm._v(" "), _c("div", { staticClass: "d-flex order-lg-2 ml-auto" }, [_vm._t("default")], 2), _vm._v(" "), _c("a", {
    staticClass: "header-toggler d-lg-none ml-3 ml-lg-0",
    attrs: { href: "#" },
    on: { click: _vm.toggleMenu }
  }, [_c("span", { staticClass: "header-toggler-icon" })])], 2)])], 1);
};
var __vue_staticRenderFns__$g = [];
__vue_render__$g._withStripped = true;

const __vue_template__$g = typeof __vue_render__$g !== 'undefined' ? { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g } : {};
/* style */
const __vue_inject_styles__$g = function (inject) {
  if (!inject) return;
  inject("data-v-dff3644a_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$g = "data-v-dff3644a";
/* module identifier */
const __vue_module_identifier__$g = undefined;
/* functional template */
const __vue_is_functional_template__$g = false;
/* component normalizer */
function __vue_normalize__$g(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Site/SiteHeader.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$g() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$g.styles || (__vue_create_injector__$g.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SiteHeader = __vue_normalize__$g(__vue_template__$g, __vue_inject_styles__$g, typeof __vue_script__$g === 'undefined' ? {} : __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, typeof __vue_create_injector__$g !== 'undefined' ? __vue_create_injector__$g : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//

var script$h = {
    name: "site-logo",
    props: ['imageUrl', 'alt']
};

const __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("a", { staticClass: "header-brand", attrs: { href: "/" } }, [_c("img", {
    staticClass: "header-brand-img",
    attrs: { src: _vm.imageUrl, alt: _vm.alt }
  })]);
};
var __vue_staticRenderFns__$h = [];
__vue_render__$h._withStripped = true;

const __vue_template__$h = typeof __vue_render__$h !== 'undefined' ? { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h } : {};
/* style */
const __vue_inject_styles__$h = function (inject) {
  if (!inject) return;
  inject("data-v-13da783f_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$h = "data-v-13da783f";
/* module identifier */
const __vue_module_identifier__$h = undefined;
/* functional template */
const __vue_is_functional_template__$h = false;
/* component normalizer */
function __vue_normalize__$h(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Site/SiteLogo.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$h() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$h.styles || (__vue_create_injector__$h.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SiteLogo = __vue_normalize__$h(__vue_template__$h, __vue_inject_styles__$h, typeof __vue_script__$h === 'undefined' ? {} : __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, typeof __vue_create_injector__$h !== 'undefined' ? __vue_create_injector__$h : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$i = {
    name: "site-nav",
    props: {
        collapsed: { default: true, type: Boolean }
    },
    components: {
        DropdownMenuItem,
        NavItem
    }
};

const __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "header collapse d-lg-flex p-0",
    class: { show: !_vm.collapsed }
  }, [_c("container", [_c("grid-row", { staticClass: "align-items-center" }, [_c("grid-col", { staticClass: "ml-auto", attrs: { lg: "3" } }), _vm._v(" "), _c("grid-col", { staticClass: "order-lg-first", attrs: { lg: "" } }, [_c("t-nav", {
    staticClass: "border-0 flex-column flex-lg-row",
    attrs: { tabbed: "" }
  }, [_vm._t("default")], 2)], 1)], 1)], 1)], 1);
};
var __vue_staticRenderFns__$i = [];
__vue_render__$i._withStripped = true;

const __vue_template__$i = typeof __vue_render__$i !== 'undefined' ? { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i } : {};
/* style */
const __vue_inject_styles__$i = function (inject) {
  if (!inject) return;
  inject("data-v-5db4d598_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$i = "data-v-5db4d598";
/* module identifier */
const __vue_module_identifier__$i = undefined;
/* functional template */
const __vue_is_functional_template__$i = false;
/* component normalizer */
function __vue_normalize__$i(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Site/SiteNav.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$i() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$i.styles || (__vue_create_injector__$i.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SiteNav = __vue_normalize__$i(__vue_template__$i, __vue_inject_styles__$i, typeof __vue_script__$i === 'undefined' ? {} : __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, typeof __vue_create_injector__$i !== 'undefined' ? __vue_create_injector__$i : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//
//
//
//
//
//
//
//

var script$j = {
    name: "site-wrapper"
};

const __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "page" }, [_c("div", { staticClass: "page-main" }, [_vm._t("default")], 2)]);
};
var __vue_staticRenderFns__$j = [];
__vue_render__$j._withStripped = true;

const __vue_template__$j = typeof __vue_render__$j !== 'undefined' ? { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j } : {};
/* style */
const __vue_inject_styles__$j = function (inject) {
  if (!inject) return;
  inject("data-v-1804684c_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$j = "data-v-1804684c";
/* module identifier */
const __vue_module_identifier__$j = undefined;
/* functional template */
const __vue_is_functional_template__$j = false;
/* component normalizer */
function __vue_normalize__$j(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/Site/SiteWrapper.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$j() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$j.styles || (__vue_create_injector__$j.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var SiteWrapper = __vue_normalize__$j(__vue_template__$j, __vue_inject_styles__$j, typeof __vue_script__$j === 'undefined' ? {} : __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, typeof __vue_create_injector__$j !== 'undefined' ? __vue_create_injector__$j : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});



var Site = /*#__PURE__*/Object.freeze({
    SiteHeader: SiteHeader,
    SiteLogo: SiteLogo,
    SiteNav: SiteNav,
    SiteWrapper: SiteWrapper
});

//
var script$k = {
    name: "stamp-card",
    props: {
        icon: { type: String, required: true },
        color: { type: String, default: 'blue' },
        header: {},
        footer: {}
    },

    computed: {
        stampClassName() {
            const className = {};
            className[`bg-${this.color}`] = true;
            return className;
        }
    },

    components: {
        Card,
        Icon
    }
};

const __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("card", { staticClass: "p-3" }, [_c("div", { staticClass: "d-flex align-items-center" }, [_c("span", { staticClass: "stamp stamp-md mr-3", class: _vm.stampClassName }, [_c("icon", { attrs: { icon: _vm.icon } })], 1), _vm._v(" "), _c("div", [_c("h4", { staticClass: "m-0" }, [_vm._t("default", [_vm._v(_vm._s(_vm.header))])], 2), _vm._v(" "), _c("small", { staticClass: "text-muted" }, [_vm._t("footer", [_vm._v(_vm._s(_vm.footer))])], 2)])])]);
};
var __vue_staticRenderFns__$k = [];
__vue_render__$k._withStripped = true;

const __vue_template__$k = typeof __vue_render__$k !== 'undefined' ? { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k } : {};
/* style */
const __vue_inject_styles__$k = function (inject) {
  if (!inject) return;
  inject("data-v-8ec4d0c4_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$k = "data-v-8ec4d0c4";
/* module identifier */
const __vue_module_identifier__$k = undefined;
/* functional template */
const __vue_is_functional_template__$k = false;
/* component normalizer */
function __vue_normalize__$k(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/StampCard.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$k() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$k.styles || (__vue_create_injector__$k.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var StampCard = __vue_normalize__$k(__vue_template__$k, __vue_inject_styles__$k, typeof __vue_script__$k === 'undefined' ? {} : __vue_script__$k, __vue_scope_id__$k, __vue_is_functional_template__$k, __vue_module_identifier__$k, typeof __vue_create_injector__$k !== 'undefined' ? __vue_create_injector__$k : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

//

var script$l = {
    name: "stats-card",

    props: {
        movement: { type: Number, required: true },
        label: { type: String, required: true },
        total: { type: String | Number, required: true }
    },

    computed: {
        movementClassName() {
            const color = !this.movement ? "yellow" : this.movement > 0 ? "green" : "red";
            const className = {};
            className[`text-${color}`] = true;
            return className;
        },

        movementIconClassName() {
            const className = {};
            className['fe fe-chevron-up'] = this.movement >= 0;
            className['fe fe-chevron-down'] = this.movement < 0;
            return className;
        }
    },

    components: {
        CardBody,
        Card
    }
};

const __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("card", [_c("card-body", { staticClass: "p-3 text-center" }, [_c("div", { staticClass: "text-right", class: _vm.movementClassName }, [_vm._v(_vm._s(_vm.movement) + "% "), _c("i", { class: _vm.movementIconClassName })]), _vm._v(" "), _c("div", { staticClass: "h1 m-0" }, [_vm._v(_vm._s(_vm.total))]), _vm._v(" "), _c("div", { staticClass: "text-muted mb-4" }, [_vm._v(_vm._s(_vm.label))])])], 1);
};
var __vue_staticRenderFns__$l = [];
__vue_render__$l._withStripped = true;

const __vue_template__$l = typeof __vue_render__$l !== 'undefined' ? { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l } : {};
/* style */
const __vue_inject_styles__$l = function (inject) {
  if (!inject) return;
  inject("data-v-884992bc_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: undefined, media: undefined });
};
/* scoped */
const __vue_scope_id__$l = "data-v-884992bc";
/* module identifier */
const __vue_module_identifier__$l = undefined;
/* functional template */
const __vue_is_functional_template__$l = false;
/* component normalizer */
function __vue_normalize__$l(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  const component = (typeof script === 'function' ? script.options : script) || {};

  {
    component.__file = "/home/mandan/tabler-vue/src/components/StatsCard.vue";
  }

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;

    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  {
    let hook;
    if (style) {
      hook = function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook !== undefined) {
      if (component.functional) {
        // register for functional component in vue file
        const originalRender = component.render;
        component.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        const existing = component.beforeCreate;
        component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }
  }

  return component;
}
/* style inject */
function __vue_create_injector__$l() {
  const head = document.head || document.getElementsByTagName('head')[0];
  const styles = __vue_create_injector__$l.styles || (__vue_create_injector__$l.styles = {});
  const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

  return function addStyle(id, css) {
    if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

    if (!style.ids.includes(id)) {
      let code = css.source;
      let index = style.ids.length;

      style.ids.push(id);

      if (isOldIE) {
        style.element = style.element || document.querySelector('style[data-group=' + group + ']');
      }

      if (!style.element) {
        const el = style.element = document.createElement('style');
        el.type = 'text/css';

        if (css.media) el.setAttribute('media', css.media);
        if (isOldIE) {
          el.setAttribute('data-group', group);
          el.setAttribute('data-next-index', '0');
        }

        head.appendChild(el);
      }

      if (isOldIE) {
        index = parseInt(style.element.getAttribute('data-next-index'));
        style.element.setAttribute('data-next-index', index + 1);
      }

      if (style.element.styleSheet) {
        style.parts.push(code);
        style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
      } else {
        const textNode = document.createTextNode(code);
        const nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  };
}
/* style inject SSR */

var StatsCard = __vue_normalize__$l(__vue_template__$l, __vue_inject_styles__$l, typeof __vue_script__$l === 'undefined' ? {} : __vue_script__$l, __vue_scope_id__$l, __vue_is_functional_template__$l, __vue_module_identifier__$l, typeof __vue_create_injector__$l !== 'undefined' ? __vue_create_injector__$l : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Table = {
    name: 't-table',
    props: {
        /**
         * Marks if table element should be wrapped inside a .table-responsive div container
         */
        responsive: { default: true },

        /**
         * Marks if table should contain .table-hover class
         */
        hover: { default: false },

        /**
         * Adds a .table-stripped class to table element
         */
        stripped: { default: false },

        /**
         * Adds a .table-outline class to table element
         */
        outline: { default: false },

        /**
         * Optimise table for display cards
         */
        cards: { default: false },

        /**
         * Table vertical alignment
         * Allowed values ['center']
         */
        verticalAlign: { type: String },

        /**
         * Classes for the table element
         * It can be Object or String
         */
        className: {}
    },

    render(createElement) {
        /**
         * Conditionally wraps table element inside .table-responsive div container
         * based on the responsive property
         */
        if (!!this.responsive) {
            return this.createTable(createElement);
        } else {
            return createElement('div', {
                class: { 'table-responsive': true }
            }, [this.createTable(createElement)]);
        }
    },

    methods: {
        /**
         * Creates an html table element with proper classes
         * @param createElementFn createElement function from render function
         * @returns {*}
         */
        createTable(createElementFn) {
            return createElementFn('table', {
                class: this.tableClassName
            }, [this.$slots.default]);
        }
    },

    computed: {
        /**
         * Returns table element classes
         * @returns Object
         */
        tableClassName() {
            let className = { table: true };
            className[`table-hover`] = this.hover !== false;
            className[`table-stripped`] = this.stripped !== false;
            className[`table-outline`] = this.outline !== false;
            className[`card-table`] = this.cards !== false;

            className[`table-vcenter`] = this.verticalAlign === 'center';

            // join classes with the ones provided by the user
            if ('object' === typeof this.className) {
                className = _extends({}, className, this.className);
            } else {
                className[`${this.className}`] = true;
            }

            return className;
        }
    }
};

var TableBody = {
    name: 'table-body',
    render(createElement) {
        return createElement('tbody', this.$slots.default);
    }
};

var TableHead = {
    name: 'table-head',
    render(createElement) {
        return createElement('thead', this.$slots.default);
    }
};

var TableRow = {
    name: 'table-row',
    render(createElement) {
        return createElement('tr', this.$slots.default);
    }
};

var TableCel = {
    name: 'table-cel',
    props: {
        header: { default: false }
    },
    render(createElement) {
        const tag = this.header !== false ? 'th' : 'td';
        return createElement(tag, this.$slots.default);
    }
};



var Table$1 = /*#__PURE__*/Object.freeze({
    Table: Table,
    TableBody: TableBody,
    TableCel: TableCel,
    TableHead: TableHead,
    TableRow: TableRow
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const components = _extends$1({}, Alert$1, {
    AccountDropdown,
    Avatar,
    Button: TButton
}, Card$1, {
    Container
}, Dropdown$1, Grid, {
    Icon
}, Nav$1, {
    Notifications
}, Page$1, {
    Progressbar: ProgressBar,
    ProgressCard
}, Site, {
    StampCard,
    StatsCard
}, Table$1);

var directives = {
    ClickOutside: ClickOutSide
};

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const TablerVuePlugin = _extends$2({

    install: function (Vue) {
        for (let component in components) {
            // register components
            Vue.component(components[component].name, components[component]);
        }

        for (let directive in directives) {
            Vue.directive(directive, directives[directive]);
        }
    }

}, components, directives);

module.exports = TablerVuePlugin;
