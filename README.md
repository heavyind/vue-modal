# Heavy Industries vue-modal

**Note** This is highly experimental. It could spontaneously combust while using.

## What it is

A plugin to add modal functionality to a Vue application. It depends on Vuex.

## What it *isn't*

It is not a kitchen sink solution, nor is it even a modal component. There are plenty of fantastic packages out there already for those looking for pre-built components.

This project is rather a Vuex API for *handling* modal components. It is abstracted out for the sake of consistency and simplicity across projects, and eschews complex configurations objects and stylistic assumptions. It requires a little more boilerplate, but its minimal interface demands little familiarity with anything other than Vue itself.

## Installation

**Note** None of these will work: the package hasn't been published yet!

Via npm:

```
npm i --save @heavyind/vue-modal
```

Via yarn:

```
yarn add @heavyind/vue-modal
```

Via unpkg:

```
<script src="https://unpkg.com/@heavyind/vue-modal"></script>
```

## Usage

### Getting started

Pass a configuration object containing your store into the plugin:

```
import VueModalPlugin from "@heavyind/vue-modal";

Vue.use(VueModalPlugin, { store })
```

By default, you must access the API by assigning it to component properties and methods (mapState, mapActions).


## Configuration

Configuration must include the Vuex store object that you intend to use.

### Default

The default configuration object has the following form:

```
{ store: null,
  mixin: false, 
  mixinNamespace: "$modal"
  storeNamespace: "modal"
}
```

### Configuration in-depth

`store`

The Vuex store you intend to use.

`mixin`

A boolean representing whether or not the plugin should attach a global mixin that allows you to access properties and methods on each object. This mixin will be scoped to `mixinNamespace`, which defaults to `"$modal"`.

`storeNamespace`

The namespace of the VueModal module in your Vuex store. Defaults to `"modal"`.

`mixinNamespace`

The name bound to each component that allows you to easily access modal properties and methods, should `mixin` be set to `true`. Defaults to `"$modal"` (e.g., `this.modal.open`);

## API

`isOpen`

The open state of the modal.

`settings`

The settings object, which takes the form `{ component, props }`, where `component` represents the optional component inside the modal and `props` represents the optional props of that component.

`component`

An alias of `settings.component`.

`props`

An alias of `settings.props`.

`open`

Sets `open` state to `true`.

`openWith` 

Sets `open` state to true and stores a settings object of type `{ component: Component, props: Object }` which contains the current modal component and any props that should be passed to it.

`close`

Sets the `open` state to false.

`toggle`

Sets the `open` state to `!open`.

`setComponent`

Sets the inner component of the modal.

`setProps`

Sets any props you would like to pass to the inner component of the modal.

## License

MIT
