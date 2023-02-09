Blockly.Blocks['title'] = {
  init: function() {
    this.appendStatementInput("content")
        .setCheck(null)
        .appendField("Title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//HTML Code Generator:
Blockly.JavaScript['title'] = function(block) {
  var statementInput = Blockly.JavaScript.statementToCode(block, 'content');

  if (statements_content != "")
    document.getElementById('title').innerText = statements_content;
  else
    document.getElementById('title').innerText = "untitled web page";

  var code = '<title>' + statements_content.trim() + '</title>\n';
  return code;
};