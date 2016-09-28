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
  initialize: function(application) {
    Ember.Logger.debug('hello!');

    // do this only when window.Polymer.telemetry does not exist (it was polyfilled)
    window.addEventListener('WebComponentsReady', function() {
      console.log('web components are ready.');
      // let PaperButton = application.resolveRegistration('component:paper-button');
    });

    // register all registered Polymer elements
    let registrations = window.Polymer.telemetry.registrations;
    for (let key in registrations) {
      let Element = registrations[key];
      if (Element.extends === 'style' || Element.extends === 'template') {
        continue;
      }

      let elementsNotToRegister = [ 'paper-input', 'paper-radio-button',
                                    'paper-radio-group', 'paper-checkbox' ];
      let elementTagName = Element.is;
      if (elementsNotToRegister.includes(elementTagName)) {
        continue;
      }

      let properties = Element._propertyInfo;
      let attributeBindings = [];

      let parentComponent = Ember.Component;
      if (properties.checked && !properties.checked.readOnly) {
        console.log(elementTagName, 'was treated as Checkbox.');
        parentComponent = Ember.Checkbox;
      } else if (properties.value && !properties.value.readOnly) {
        console.log(elementTagName, 'was treated as TextField.');
        parentComponent = Ember.TextField;
      }

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
