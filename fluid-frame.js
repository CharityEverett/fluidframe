AFRAME.registerComponent('fluid-frame', {
  schema: {
    minScale: {type: 'number', default: 0.5},
    maxScale: {type: 'number', default: 2},
    scaleThreshold: {type: 'number', default: 1000}
  },

  init: function() {
    this.updateScale = this.updateScale.bind(this);
    window.addEventListener('resize', this.updateScale);
    this.updateScale();
  },

  remove: function() {
    window.removeEventListener('resize', this.updateScale);
  },

 updateScale: function() {
  var data = this.data;
  var el = this.el;
  
  var width = window.innerWidth;
  var scale = Math.max(data.minScale, Math.min(width / data.scaleThreshold, data.maxScale));
  
  el.object3D.scale.set(scale, scale, scale);
}
  }
});
