Blockly.Blocks['document'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Document");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("Document");
 this.setHelpUrl("Document");
  }
};

//HTML Code Generator:

Blockly.JavaScript['document'] = function(block) {
  var statements_content = Blockly.statementToCode(block, 'content');
  var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};