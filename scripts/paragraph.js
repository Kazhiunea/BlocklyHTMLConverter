Blockly.Blocks['paragraph'] = {
  init: function() {
    this.appendStatementInput("content")
        .setCheck(null)
        .appendField("Paragraph");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['paragraph'] = function(block) {
  var text = block.getFieldValue('TEXT');
  var code = '<p>\n' + statements_content + '</p>\n';
  return code;
};