# FluidFrame

FluidFrame is a responsive design toolkit for A-Frame, enabling developers to create adaptive WebXR experiences that seamlessly adjust across various devices and screen sizes.

## Features

- Responsive scaling of A-Frame entities based on screen size and device type
- Device detection for optimized experiences on mobile, tablet, desktop, and VR
- Easy integration with existing A-Frame projects
- Performance-focused design for smooth experiences across platforms

## Installation

1. Clone this repository or download the ZIP file.
2. Copy `fluid-frame.js` and `device-detection.js` from the `components` folder into your project's directory.

## Usage

1. Include the scripts in your HTML file:

```html
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="path/to/device-detection.js"></script>
<script src="path/to/fluid-frame.js"></script>

Add the device-detector component to your A-Frame scene:
xml
<a-scene device-detector>
  <!-- Your scene content -->
</a-scene>

Use the fluid-frame component on entities you want to be responsive:
xml
<a-box fluid-frame="minScale: 0.5; maxScale: 2; scaleThreshold: 1000" position="0 1.5 -3" color="#4CC3D9"></a-box>

Configuration
The fluid-frame component accepts the following properties:
minScale: Minimum scale factor (default: 0.5)
maxScale: Maximum scale factor (default: 2)
scaleThreshold: Width threshold for scaling (default: 1000)
mobileScale: Scale factor for mobile devices (default: 0.7)
tabletScale: Scale factor for tablet devices (default: 0.85)
desktopScale: Scale factor for desktop devices (default: 1)
vrScale: Scale factor for VR mode (default: 1)
Examples
Check out the examples folder for sample implementations of FluidFrame.
Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.
Support
If you encounter any issues or have questions, please file an issue on the GitHub repository.
text

This README provides an overview of FluidFrame, its features, installation instructions, usage examples, and configuration options. It also includes sections on contributing and support.

Remember to:
1. Adjust any paths or versions as necessary.
2. Add or modify sections based on any additional features or changes you've made.
3. Include any specific examples or use cases you want to highlight.
4. Update the license information if you're using a different license.

After making these changes, commit and push the updated README to your GitHub repository.
