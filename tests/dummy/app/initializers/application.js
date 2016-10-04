import Ember from 'ember';

// function findElementByName(elementName) {
//   return function find(element) {
//     return element.is === elementName;
//   };
// }

// function attachAttributeBindings(application) {
//   let registrations = window.Polymer.telemetry.registrations;
//   let PolymerPaperButton = registrations.find(findElementByName('paper-button'));
//
//   let properties = PolymerPaperButton._propertyInfo;
//   let attributeBindings = [];
//   for (let key in properties) {
//     let obj = properties[key];
//     if (obj.type === Object || obj.readOnly) {
//       continue;
//     }
//
//     attributeBindings.push(obj.attribute);
//   }
// }

export default {
  name: 'inject-custom-elements-as-components',
  initialize: function() {
  },
  doNotInitialize: function(application) {
    Ember.Logger.debug('hello!');

    // we are using web components polyfill.
    if (!window.Polymer.telemetry) {
      let elementTagName = 'paper-input';
      let Component = Ember.TextField.extend({
        tagName: elementTagName
      });
      application.register(`component:${elementTagName}`, Component);

      window.addEventListener('WebComponentsReady', function() {
        console.log('web components are ready.');

        console.log('attaching attribute bindings to registered components.');
        let PaperInput = application.resolveRegistration('component:paper-input');

        PaperInput.reopenClass({
          attributeBindings: ['label', 'type', 'error-message', 'invalid',
            'auto-validate', 'required', 'tabindex']
        });
        // debugger;
        // let PaperButton = application.resolveRegistration('component:paper-button');
      });

      return;
  }

    // register all registered Polymer elements
    let registrations = window.Polymer.telemetry.registrations;
    for (let key in registrations) {
      let Element = registrations[key];
      if (Element.extends === 'style' || Element.extends === 'template') {
        continue;
      }

      // let elementsNotToRegister = [ 'paper-input', 'paper-radio-button',
      //                               'paper-radio-group', 'paper-checkbox' ];
      let elementsNotToRegister = [];
      let elementTagName = Element.is;
      if (elementsNotToRegister.includes(elementTagName)) {
        continue;
      }


      let properties = Element._propertyInfo;
      let parentComponent = Ember.Component;

      if (properties.checked && !properties.checked.readOnly) {
        console.log(elementTagName, 'was treated as Checkbox.');
        parentComponent = Ember.Checkbox;
      } else if (properties.value && !properties.value.readOnly) {
        console.log(elementTagName, 'was treated as TextField.');
        parentComponent = Ember.TextField;
      }

      let attributeBindings = [];
      for (let key in properties) {
        let obj = properties[key];
        if (obj.type === Object || obj.readOnly) {
          continue;
        }

        attributeBindings.push(obj.attribute);
      }

      let Component = parentComponent.extend({
        layout: `{{yield}}`,
        tagName: elementTagName,
        attributeBindings,

        'iron-select': function(event) {
          if (this.get('items')) {
            this.set('selected', this.get('items')[event.target.selected]);
          } else {
            this.set('selected', event.target.selected);
          }
        }
      });

      Component.reopenClass({
        positionalParams: [ 'items' ]
      });
      console.log('registered component:', elementTagName);
      application.register(`component:${elementTagName}`, Component);
    }


    // let PaperButton = Ember.Component.extend({
    //   layout: `{{yield}}`,
    //   tagName: 'paper-button'
    // });
    // application.register('component:paper-button', PaperButton);
  }
};
