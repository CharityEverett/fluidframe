AFRAME.registerComponent('device-detector', {
  schema: {
    // You can add properties here if needed
  },

  init: function () {
    this.deviceType = this.detectDeviceType();
    this.el.setAttribute('device-type', this.deviceType);
    
    // Emit an event with the detected device type
    this.el.emit('deviceDetected', { deviceType: this.deviceType });
  },

  detectDeviceType: function () {
    var userAgent = navigator.userAgent.toLowerCase();
    var isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent);
    var isMobile = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isTablet) return 'tablet';
    if (isMobile) return 'mobile';
    return 'desktop';
  },

  // Utility methods to check device type
  isMobile: function () {
    return this.deviceType === 'mobile';
  },

  isTablet: function () {
    return this.deviceType === 'tablet';
  },

  isDesktop: function () {
    return this.deviceType === 'desktop';
  },

  // Method to adjust component behavior based on device type
  adjustComponentBehavior: function (component) {
    switch (this.deviceType) {
      case 'mobile':
        // Adjust for mobile
        component.el.setAttribute('scale', '0.5 0.5 0.5');
        break;
      case 'tablet':
        // Adjust for tablet
        component.el.setAttribute('scale', '0.75 0.75 0.75');
        break;
      case 'desktop':
        // Adjust for desktop
        component.el.setAttribute('scale', '1 1 1');
        break;
    }
  }
});

// Usage example:
// <a-scene device-detector>
//   <a-box device-adjustable position="0 1.5 -3" color="#4CC3D9"></a-box>
// </a-scene>

AFRAME.registerComponent('device-adjustable', {
  dependencies: ['device-detector'],

  init: function () {
    var deviceDetector = this.el.sceneEl.components['device-detector'];
    deviceDetector.adjustComponentBehavior(this);
  }
});
