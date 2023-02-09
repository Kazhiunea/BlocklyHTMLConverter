Blockly.Blocks['text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text")
        .appendField(new Blockly.FieldTextInput(""), "content");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['paragraph'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = text_content + '\n';
  return code;
};