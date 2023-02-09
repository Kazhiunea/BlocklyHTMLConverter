//The Image block:
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

//The Body block:
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

//The Document block:
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

//The Header block:
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

//The Paragraph block:
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

//The Text block:
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

//The Title block:
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


//////////////////////////////////////////////////////////////
//The HTML Code Generators:
var HTMLGenerator = new Blockly.Generator('HTML');

HTMLGenerator.init = function(workspace) {};
HTMLGenerator.finish = function(code) {return code;};

HTMLGenerator.scrub_ = function(block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HTMLGenerator.blockToCode(nextBlock);
  return code + nextCode;
};


function removeIndentAndTrailingNewline() {
   
}




//Document Code Generator
HTMLGenerator['document'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<!DOCTYPE HTML>\n<html>\n' + statements_content + '</html>\n';
  return code;
};

//Header Code Generator
HTMLGenerator['header'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<head>\n  <meta charset="utf-8">\n' + statements_content + '</head>\n';
  return code;
};

//Title Code Generator
HTMLGenerator['title'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<title>' + statements_content.trim() + '</title>\n';
  return code;
};


//Text Code Generator
HTMLGenerator['text'] = function(block) {
  var text_content = block.getFieldValue('content');
  var code = text_content + '\n';
  return code;
};

//Paragraph Code Generator
HTMLGenerator['paragraph'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<p>\n' + statements_content + '</p>\n';
  return code;
};

//Body Code Generator
HTMLGenerator['body'] = function(block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<body>\n' + statements_content + '</body>\n';
  return code;
};

//Image Code Generator
HTMLGenerator['image'] = function(block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var code = '<img src="' +  text_image + '" alt="' + text_alt + '">\n';
  return code;
};