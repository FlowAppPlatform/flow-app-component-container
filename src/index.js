import React from 'react';

import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class ContainerComponent extends AppComponent {
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
              id: 'load',
              name: 'Load Event',
              type: 'graph',
              options: {},
              data: null,
            },
            {
              id: 'hover',
              name: 'Hover Event',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],
      iconUrl: '/assets/images/container-component.png',
      name: 'Container',
      type: 'ui-component',
      componentType: 'container',
      category: 'Wrappers',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: true,
      allowedChildTypes: ['checkbox', 'link', 'image', 'input', 'form', 'search', 'text', 'loader', 'radio', 'map', 'nav', 'video', 'dropdown'],
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  componentDidMount() {
    this.triggerGraphEvent('load')
  }

  triggerGraphEvent = (eventId) => {
    const graphId = this.getPropertyData(eventId);
    this.getElementProps().onEvent(graphId)
  }

  renderContent() {
    let customStyles = {};
    if (!this.props.hasChildren) {
      customStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50px',
      };
    }
    return (
      <div
        className="ui-container" 
        style={customStyles}
        onMouseOver={() => this.triggerGraphEvent('hover')}
      >
        {!this.props.hasChildren && <span>Container</span>}
        {this.renderChildren()}
      </div>
    );
  }
}

export default ContainerComponent;
