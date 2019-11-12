cytoscape-node-html-label
================================================================================


## Description

This extension provides ability to add labels for Cytoscape nodes. Simple example:

`cyInstance.nodeHtmlLabel( [{ tpl: d => '<div>' + d + '</div>' }] );`

Demo: https://kaluginserg.github.io/cytoscape-node-html-label/

## Features
- optimized for high performance with high number of nodes, for smooth panning and zooming.
- customizable labels with different templates.

## Dependencies

 * Cytoscape.js ^3.0.0


## Usage instructions

Download the library:
 * via npm: `npm install @datadotworld/cytoscape-node-html-label`

#### RequireJs approach:
`require()` the library as appropriate for your project:

CommonJS:
```js
var cytoscape = require('cytoscape');
var nodeHtmlLabel = require('@datadotworld/cytoscape-node-html-label');
nodeHtmlLabel( cytoscape ); // register extension
```

AMD:
```js
require(['cytoscape', '@datadotworld/cytoscape-node-html-label'], function( cytoscape, nodeHtmlLabel ){
  nodeHtmlLabel( cytoscape ); // register extension
});
```


## API

`nodeHtmlLabel` parameter is an array of options:

```js
cyInstance.nodeHtmlLabel(
[
    {
        query: 'node', // cytoscape query selector
        halign: 'center', // title vertical position. Can be 'left',''center, 'right'
        valign: 'center', // title vertical position. Can be 'top',''center, 'bottom'
        halignBox: 'center', // title vertical position. Can be 'left',''center, 'right'
        valignBox: 'center', // title relative box vertical position. Can be 'top',''center, 'bottom'
        cssClass: '', // any classes will be as attribute of <div> container for every title
        tpl: function(data){return '<span>' + data + '</span>';} // your html template here
        clickHandler: function(event){ window.location = event.id; } // handle clicks on the label
	exitHandler: function(_event){ this.hideTooltip(); } // handle the cursor exiting the label
	hoverHandler: function(_event){ this.showTooltip(); } // handle the cursor entering the label
    }
]
    );
```

## Usage example

Code example:
```js
// create Cy instance
var cyInstance = cytoscape({
    container: document.getElementById('cy'),
    layout: {
        name: 'random'
    },
    elements: [ // your cy elements
        { group: "nodes", data: { id: 'a1', name: 'a10' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a1', name: 'a10' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a1', name: 'a10' }, classes: 'l1' },
        { group: "nodes", data: { id: 'a5', name: 'a5' }, classes: 'l2' }
    ]
});

// set nodeHtmlLabel for your Cy instance
cyInstance.nodeHtmlLabel([{
        query: '.l1',
        valign: "top",
        halign: "left",
        valignBox: "top",
        halignBox: "left",
        tpl: function(data) {
            return '<p class="cy-title__p1">' + data.id + '</p>' + '<p  class="cy-title__p2">' + data.name + '</p>';
        },
        clickHandler: function(event) { window.location = event.target.id }
    },
    {
        query: '.l2',
        tpl: function(data) {
            return '<p class="cy-title__p1">' + data.id + '</p>' + '<p  class="cy-title__p2">' + data.name + '</p>';
        }
    }
]);
```

Demo here: https://kaluginserg.github.io/cytoscape-node-html-label/


## How to build and develop:
1) Run `yarn` to install dependencies
1) Run `yarn start`
1) Create change in src/cytoscape-node-html-label.ts
1) When finished => `yarn test`
1) Prepare js and min files: `yarn build`
1) `git commit`

Then, for version update and publish:
1) Copy the appropriate `.npmrc` to the working directory to be able to publish to Artifactory.
1) `yarn publish`
