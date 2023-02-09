Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Header");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//HTML Code Generator:
Blockly.JavaScript['header'] = function(block) {
  var content = Blockly.JavaScript.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};



