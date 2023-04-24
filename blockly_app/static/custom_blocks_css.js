var CSSGenerator = new Blockly.Generator('CSS');
  
  CSSGenerator.init = function(workspace) {};
  CSSGenerator.finish = function(code) {return code;};
  
  CSSGenerator.scrub_ = function(block, code) {
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = CSSGenerator.blockToCode(nextBlock);
    return code + nextCode;
  };


////////////////////////////////////////////////////////////////////////////////////////////////////////////

  Blockly.Blocks['text_align'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("text-align")
          .appendField(new Blockly.FieldDropdown([["left", "left"], ["center", "center"], ["right", "right"], ["justify", "justify"]]), "alignment");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("Sets the horizontal alignment of a text element.");
      this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-align.asp");
    }
  };

  CSSGenerator['text_align'] = function(block) {
    var alignment = block.getFieldValue('alignment');
    var code = 'text-align: ' + alignment + ';\n';
    return code;
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  Blockly.Blocks['padding'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("padding")
          .appendField(new Blockly.FieldTextInput("0"), "padding_value")
          .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(260);
      this.setTooltip("Sets the padding of an element.");
      this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
    }
  };

  CSSGenerator['padding'] = function(block) {
    var padding_value = block.getFieldValue('padding_value');
    var unit = block.getFieldValue('unit');
    var code = 'padding: ' + padding_value + unit + ';\n';
    return code;
  };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    Blockly.Blocks['width'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("width")
              .appendField(new Blockly.FieldTextInput("100"), "width_value")
              .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(260);
          this.setTooltip("Sets the width of an element.");
          this.setHelpUrl("https://www.w3schools.com/cssref/pr_dim_width.asp");
        }
      };

      CSSGenerator['width'] = function(block) {
        var width_value = block.getFieldValue('width_value');
        var unit = block.getFieldValue('unit');
        var code = 'width: ' + width_value + unit + ';\n';
        return code;
      };

          ////////////////////////////////////////////////////////////////////////////////////////////////////////////

          Blockly.Blocks['text_align'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("text-align")
                  .appendField(new Blockly.FieldDropdown([["left", "left"], ["center", "center"], ["right", "right"], ["justify", "justify"]]), "alignment");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(260);
              this.setTooltip("Sets the horizontal alignment of a text element.");
              this.setHelpUrl("https://www.w3schools.com/cssref/pr_text_text-align.asp");
            }
          };
          
          HTMLGenerator['text_align'] = function(block) {
            var alignment = block.getFieldValue('alignment');
            var code = 'text-align: ' + alignment + ';\n';
            return code;
          };
          
          // Padding block
          Blockly.Blocks['padding'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("padding")
                  .appendField(new Blockly.FieldTextInput("0"), "padding_value")
                  .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(260);
              this.setTooltip("Sets the padding of an element.");
              this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
            }
          };
          
          HTMLGenerator['padding'] = function(block) {
            var padding_value = block.getFieldValue('padding_value');
            var unit = block.getFieldValue('unit');
            var code = 'padding: ' + padding_value + unit + ';\n';
            return code;
          };
          
          // Width block
          Blockly.Blocks['width'] = {
            init: function() {
              this.appendDummyInput()
                  .appendField("width")
                  .appendField(new Blockly.FieldTextInput("100"), "width_value")
                  .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
              this.setPreviousStatement(true, null);
              this.setNextStatement(true, null);
              this.setColour(260);
              this.setTooltip("Sets the width of an element.");
              this.setHelpUrl("https://www.w3schools.com/cssref/pr_dim_width.asp");
            }
          };
          
          HTMLGenerator['width'] = function(block) {
            var width_value = block.getFieldValue('width_value');
            var unit = block.getFieldValue('unit');
            var code = 'width: ' + width_value + unit + ';\n';
            return code;
          };