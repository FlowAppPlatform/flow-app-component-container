import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class ContainerComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/container-component.png',
    name: 'Container',
    type: 'ui-component',
    componentType: 'container',
    category: 'Wrappers',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: true
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the container',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the container',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...ContainerComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    let customStyles = {};
    if (!this.props.hasChildren) {
      customStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100px',
      };
    }
    return (
      <div className="ui-container" style={customStyles}>
        {!this.props.hasChildren && <span>Container</span>}
        {this.renderChildren()}
      </div>
    );
  }
}

export default ContainerComponent;