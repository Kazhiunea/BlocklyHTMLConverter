Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Body");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//HTML Code Generator
Blockly.JavaScript['body'] = function(block) {
  var content = Blockly.JavaScript.statementToCode(block, 'CONTENT');
  var code = '<body>\n' + content + '</body>\n';
  return code;
};