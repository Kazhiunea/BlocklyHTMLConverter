Blockly.Blocks['image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Image")
        .appendField(new Blockly.FieldTextInput("URL"), "IMAGE")
        .appendField("or")
        .appendField(new Blockly.FieldTextInput("alternative text"), "ALT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//HTML Code Generator:
Blockly.JavaScript['image'] = function(block) {
  var imageUrl = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};