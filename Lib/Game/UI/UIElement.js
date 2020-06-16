/**
 * @fileoverview UIElement base class for all the UI in the game
 * @author Horton Cheng <horton0712@gmail.com>
 */

const Vector = require("../Physics/Vector");

/**
 * UI element class
 */
class UIElement {
  /**
   * Constructor for a UIElement class
   * @param {{
    * width: Number,
    * height: Number,
    * image: String,
    * position: Vector,
    * clickable: Boolean,
    * value: any,
    * onHover: function():void,
    * onNotHover: function():void
    * }} config Config
    */
  constructor(config) {
    this.width = config.width || 133;
    this.height = config.height || 25;
    this.image = config.image || undefined;
    this.value = config.value || undefined;

    this.position = config.position || Vector.zero();
    this.onHover = config.onHover || function() { return false; };
    this.onNotHover = config.onNotHover || function() { return false; };
    this.clickable = config.clickable || false;

    this.hovered = false;
  }
  /**
   * Test if the mouse is inside the UI element
   * @param {{
   * mouseX: Number,
   * mouseY: Number
   * }} event The mouse event that happened
   * @returns {Boolean}
  */
  isMouseInside(event) {
    return event.mouseX > this.position.x &&
         event.mouseX < this.position.x + this.width &&
         event.mouseY > this.position.y &&
         event.mouseY < this.position.y + this.height;
  }
}

/**
 * Module exports
 */
module.exports = exports = UIElement;