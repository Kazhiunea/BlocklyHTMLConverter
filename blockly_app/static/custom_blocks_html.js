
var HTMLGenerator = new Blockly.Generator('HTML');

HTMLGenerator.init = function (workspace) { };
HTMLGenerator.finish = function (code) { return code; };

HTMLGenerator.scrub_ = function (block, code) {
  var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  var nextCode = HTMLGenerator.blockToCode(nextBlock);
  return code + nextCode;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Body block:
Blockly.Blocks['body'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Body");
    this.appendStatementInput("content")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <body> tag defines the document's body.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_body.asp");
  }
};

//Body Elemento 
HTMLGenerator['body'] = function (block) {
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var idValue = block.getFieldValue('id');
  var code = '<body';
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>\n' + content_of_conjoined + '</body>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Document block:
Blockly.Blocks['document'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Document");
    this.appendStatementInput("content")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
      this.setColour(100);
    this.setTooltip("The <html> tag represents the root of an HTML document.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_html.asp");
  }
};

//Document Code Generator
HTMLGenerator['document'] = function (block) {
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var idValue = block.getFieldValue('id');
  
  var code = '<!DOCTYPE HTML>\n<html';
  
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  
  code += '>\n<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n';
  code += content_of_conjoined;
  code += '</html>\n';
  
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Header block:
Blockly.Blocks['header'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Header");
    this.appendStatementInput("content")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <head> element is a container for metadata");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_head.asp");
  }
};

//Header Code Generator
HTMLGenerator['header'] = function (block) {
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var idValue = block.getFieldValue('id');
  var code = '<head';
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>\n  <meta charset="utf-8">\n' + content_of_conjoined + '</head>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Paragraph block:
Blockly.Blocks['paragraph'] = {
  init: function () {
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("Paragraph");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <p> tag defines a paragraph.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_p.asp");
  }
};

//Paragraph Code Generator
HTMLGenerator['paragraph'] = function (block) {
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var idValue = block.getFieldValue('id');
  var code = '<p';
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>\n' + content_of_conjoined + '</p>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Text block:
Blockly.Blocks['text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Text")
      .appendField(new Blockly.FieldTextInput(""), "content");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("A text field");
    this.setHelpUrl("");
  }
};

HTMLGenerator['text'] = function (block) {
  var content_of_conjoined = block.getFieldValue('content');
  var idValue = block.getFieldValue('id');
  var code = '';
  if (idValue && idValue !== 'none') {
    code += '<span id="' + idValue + '">';
  }
  code += '\n' + content_of_conjoined;
  if (idValue && idValue !== 'none') {
    code += '</span>';
  }
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Title block:
Blockly.Blocks['title'] = {
  init: function () {
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("Title");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <title> tag defines the title of the document.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_title.asp");
  }
};

HTMLGenerator['title'] = function (block) {
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var idValue = block.getFieldValue('id');
  var code = '<title';
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>' + content_of_conjoined.trim() + '</title>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//The Image block:
Blockly.Blocks['image'] = {
  init: function () {
    this.setColour(100);
    this.appendDummyInput()
      .appendField("Image")
      .appendField(new Blockly.FieldTextInput("URL"), "IMAGE")
      .appendField("or")
      .appendField(new Blockly.FieldTextInput("alternative text"), "ALT");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("The <img> tag is used to embed an image in an HTML page.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_img.asp");
  }
};

//Image Elemento kodo generatorius
HTMLGenerator['image'] = function (block) {
  var text_image = block.getFieldValue('IMAGE');
  var text_alt = block.getFieldValue('ALT');
  var idValue = block.getFieldValue('id');
  var code = '<img src="' + text_image + '" alt="' + text_alt + '"';
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//DIV
Blockly.Blocks['div'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("div");
    this.appendDummyInput()
      .appendField("Class:")
      .appendField(new Blockly.FieldTextInput(""), "class_name");
    this.appendDummyInput()
      .appendField("ID:")
      .appendField(new Blockly.FieldTextInput("none"), "id");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <div> tag defines a division or a section in an HTML document.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_div.asp");
  }
};

HTMLGenerator['div'] = function (block) {
  var class_name = block.getFieldValue('class_name');
  var idValue = block.getFieldValue('id');
  var content_of_conjoined = HTMLGenerator.statementToCode(block, 'content');
  var code = '<div';
  if (class_name) {
    code += ' class="' + class_name + '"';
  }
  if (idValue && idValue !== 'none') {
    code += ' id="' + idValue + '"';
  }
  code += '>\n' + content_of_conjoined + '</div>\n';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Button
Blockly.Blocks['html_button'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("button");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField("content");
    this.appendStatementInput("onClick")
      .setCheck(null)
      .appendField("onClick");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("HTML button tag");
    this.setHelpUrl("");
  }
};

HTMLGenerator['html_button'] = function(block) {
  var content = HTMLGenerator.statementToCode(block, 'content');
  var onClick = HTMLGenerator.statementToCode(block, 'onClick');

  var code = '<button onclick="' + onClick + '">' + content + '</button>';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Blockly.Blocks['get_element_by_id'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("getElementById")
      .appendField(new Blockly.FieldTextInput("id"), "getElementById")
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("The <img> tag is used to embed an image in an HTML page.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_img.asp");
  }
};

HTMLGenerator['get_element_by_id'] = function(block) {
  var idValue = block.getFieldValue('getElementById');
  var code = 'document.getElementById("' + idValue + '")';
  return code;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Aditionals:

//bold:
//REPLACED
/*
Blockly.Blocks['strong'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bold Text");
    this.appendStatementInput("content")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
 
HTMLGenerator['strong'] = function(block) {
var content = HTMLGenerator.statementToCode(block, 'content');
var code = '<b>' + content + '</b>\n';
return code;
};*/

//new line
Blockly.Blocks['newline'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("New Line");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <br> tag inserts a single line break.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_br.asp");
  }
};

HTMLGenerator['newline'] = function (block) {
  return '<br>\n';
};


//unordered list:
Blockly.Blocks['unorderedList'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Unordered List");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <ul> tag defines an unordered (bulleted) list.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_ul.asp");
  }
};

HTMLGenerator['unorderedList'] = function (block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  // Generating the HTML code for an unordered list
  var code = '<ul>\n' + statements_content + '</ul>\n';
  return code;
};

//ordered list
Blockly.Blocks['orderedList'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Ordered List");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <ol> tag defines an ordered list. An ordered list can be numerical or alphabetical.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_ol.asp");
  }
};

HTMLGenerator['orderedList'] = function (block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<ol>\n' + statements_content + '</ol>\n';
  return code;
};

//list element
Blockly.Blocks['listElem'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("List element");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <li> tag defines a list item.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_li.asp");
  }
};

HTMLGenerator['listElem'] = function (block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<li>\n' + statements_content + '</li>\n';
  return code;
};

//Aside
Blockly.Blocks['aside'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Aside");
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabelSerializable("Width:"), "")
      .appendField(new Blockly.FieldNumber(0, 0, 100), "width")
      .appendField("%");
    this.appendDummyInput()
      .appendField("Position:")
      .appendField(new Blockly.FieldDropdown([["Left", "Left"], ["Right", "Right"]]), "position");
    this.appendDummyInput()
      .appendField("Background colour:")
      .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <aside> tag defines some content aside from the content it is placed in.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_aside.asp");
  }
};

HTMLGenerator['aside'] = function (block) {
  var width = block.getFieldValue('width');
  var position = block.getFieldValue('position');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'NAME');

  return '<aside style="width:' + width + '%; float:' + position + '; background-color:' + colour + ';">\n' + content + '\n</aside>\n';
};

//hyperlink
Blockly.Blocks['hyperlink'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Hyperlink");
    this.appendStatementInput("NAME")
      .setCheck(null);
    this.appendDummyInput()
      .appendField("Link")
      .appendField(new Blockly.FieldTextInput(""), "link");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <a> tag defines a hyperlink, which is used to link from one page to another.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_a.asp");
  }
};

HTMLGenerator['hyperlink'] = function (block) {
  var content = HTMLGenerator.statementToCode(block, 'NAME');
  var link = block.getFieldValue('link');
  var code = '<a href="' + link + '">' + content + '</a>';
  return code;
};

//Description list
Blockly.Blocks['descriptionList'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Description List");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <dl> tag defines a description list.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_dl.asp");
  }
};

HTMLGenerator['descriptionList'] = function (block) {
  var statements_content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<dl>\n' + statements_content + '</dl>\n';
  return code;
};

//Description item:
Blockly.Blocks['descriptionItem'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Description item");
    this.appendStatementInput("NAME")
      .setCheck(null)
      .appendField("Item:");
    this.appendStatementInput("NAMEDescription")
      .setCheck(null)
      .appendField("Description:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <dt> tag defines a term/name in a description list.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_dt.asp");
  }
};

HTMLGenerator['descriptionItem'] = function (block) {
  var itemInput = HTMLGenerator.statementToCode(block, 'NAME') || '\n';
  var descriptionInput = HTMLGenerator.statementToCode(block, 'NAMEDescription') || '\n';
  return '<dt>' + itemInput + '</dt>\n<dd>' + descriptionInput + '</dd>\n';
};

//Heading
Blockly.Blocks['heading'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Heading");
    this.appendDummyInput()
      .appendField("Heading style:")
      .appendField(new Blockly.FieldDropdown([["Heading1", "Heading 1"], ["Heading2", "Heading 2"], ["Heading3", "Heading 3"], ["Heading4", "Heading 4"], ["Heading5", "Heading 5"], ["Heading6", "Heading 6"]]), "heading")
      .appendField("Text:")
      .appendField(new Blockly.FieldTextInput(" "), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <h1> to <h6> tags are used to define HTML headings.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_hn.asp");
  }
};

HTMLGenerator['heading'] = function (block) {
  var heading = block.getFieldValue('heading');
  var text = block.getFieldValue('NAME');
  return '<h' + heading[heading.length - 1] + '>' + text + '</h' + heading[heading.length - 1] + '>\n';
};


//Text effects:
Blockly.Blocks['textWithStyle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Text with style");
    this.appendDummyInput()
      .appendField("Text style")
      .appendField(new Blockly.FieldDropdown([["Bold", "bold"], ["Italic", "italic"], ["Underline", "underline"], ["Strike-through", "strikethrough"], ["Subscription", "subscribe"], ["Superscription", "superscribe"]]), "formating");
    this.appendDummyInput()
      .appendField("Text colour")
      .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.appendDummyInput()
      .appendField("Text:")
      .appendField(new Blockly.FieldTextInput(" "), "INPUT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("Various style options for text");
    this.setHelpUrl("");
  }
};

HTMLGenerator['textWithStyle'] = function (block) {
  var htmlCode = "";
  var textStyle = block.getFieldValue('formating');
  var textColour = block.getFieldValue('colour');
  var text = block.getFieldValue('INPUT');
  switch (textStyle) {
    case "bold":
      htmlCode = "<b style='color:" + textColour + ";'>" + text + "</b>";
      break;
    case "strikethrough":
      htmlCode = "<s style='color:" + textColour + ";'>" + text + "</s>";
      break;
    case "underline":
      htmlCode = "<u style='color:" + textColour + ";'>" + text + "</u>";
      break;
    case "italic":
      htmlCode = "<i style='color:" + textColour + ";'>" + text + "</i>";
      break;
    case "subscribe":
      htmlCode = "<sub style='color:" + textColour + ";'>" + text + "</sub>";
      break;
    case "superscribe":
      htmlCode = "<sup style='color:" + textColour + ";'>" + text + "</sup>";
      break;
  }
  return htmlCode;
};

//Table

Blockly.Blocks['table'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Table");
    this.appendDummyInput()
      .appendField("Border size:")
      .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
    this.appendDummyInput()
      .appendField("Border colour")
      .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <table> tag defines an HTML table.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_table.asp");
  }
};

HTMLGenerator['table'] = function (block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<table style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</table>\n';
};

//Row
Blockly.Blocks['tableRow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Table row");
    this.appendDummyInput()
      .appendField("Border size:")
      .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
    this.appendDummyInput()
      .appendField("Border colour")
      .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <tr> tag defines a row in an HTML table.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_tr.asp");
  }
};

HTMLGenerator['tableRow'] = function (block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<tr style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</tr>\n';
};

//Table Entry
Blockly.Blocks['tableElement'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Table element");
    this.appendDummyInput()
      .appendField("Border size:")
      .appendField(new Blockly.FieldNumber(0, 0, 10), "borderSize");
    this.appendDummyInput()
      .appendField("Border colour")
      .appendField(new Blockly.FieldColour("#000000"), "colour");
    this.appendStatementInput("content")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(100);
    this.setTooltip("The <td> tag defines a standard data cell in an HTML table.");
    this.setHelpUrl("https://www.w3schools.com/tags/tag_td.asp");
  }
};

HTMLGenerator['tableElement'] = function (block) {
  var borderSize = block.getFieldValue('borderSize');
  var colour = block.getFieldValue('colour');
  var content = HTMLGenerator.statementToCode(block, 'content');
  return '<td style="border: ' + borderSize + 'px solid ' + colour + '">' + content + '</td>\n';
};





//////////////////////////Aditional blocks



Blockly.Blocks['html_style'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("style");
    this.appendStatementInput("CSS")
      .setCheck("String");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("Create a style element.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style");
  }
};

HTMLGenerator['html_style'] = function (block) {
  var cssCode = HTMLGenerator.statementToCode(block, 'CSS');
  var code = '<style>\n' + cssCode + '</style>\n';
  return code;
};

Blockly.Blocks['text_align'] = {
  init: function () {
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

HTMLGenerator['text_align'] = function (block) {
  var alignment = block.getFieldValue('alignment');
  var code = 'text-align: ' + alignment + ';\n';
  return code;
};

// Padding block
Blockly.Blocks['padding'] = {
  init: function () {
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

HTMLGenerator['padding'] = function (block) {
  var padding_value = block.getFieldValue('padding_value');
  var unit = block.getFieldValue('unit');
  var code = 'padding: ' + padding_value + unit + ';\n';
  return code;
};

// Width block
Blockly.Blocks['width'] = {
  init: function () {
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

HTMLGenerator['width'] = function (block) {
  var width_value = block.getFieldValue('width_value');
  var unit = block.getFieldValue('unit');
  var code = 'width: ' + width_value + unit + ';\n';
  return code;
};

Blockly.Blocks['css_selector'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("CSS Selector")
      .appendField(new Blockly.FieldTextInput(""), "selector");
    this.appendStatementInput("style_rules")
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip("Define CSS rules for a specific selector.");
    this.setHelpUrl("https://www.w3schools.com/css/css_syntax.asp");
  }
};

HTMLGenerator['css_selector'] = function (block) {
  var selector = block.getFieldValue('selector');
  var style_rules = HTMLGenerator.statementToCode(block, 'style_rules');
  var code = selector + ' {\n' + style_rules + '}\n';
  return code;
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////// JAVA SCRIPT

//Java Scipt block
Blockly.Blocks['inline_javascript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Inline JavaScript");
    this.appendStatementInput("content")
        .setCheck("String");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Inline JavaScript code");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script");
  }
};

HTMLGenerator['inline_javascript'] = function(block) {
  var content = HTMLGenerator.statementToCode(block, 'content');
  var code = '<script>\n' + content + '</script>\n';
  return code;
};

//Java Script Alert
Blockly.Blocks['inline_javascript_alert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Alert function")
        .appendField("Name:")
        .appendField(new Blockly.FieldTextInput("myAlert"), "function_name");
    this.appendStatementInput("message")
        .setCheck("String")
        .appendField("Message");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Inline JavaScript alert() function");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/API/Window/alert");
  }
};

HTMLGenerator['inline_javascript_alert'] = function(block) {
  var functionName = block.getFieldValue('function_name');
  var message = HTMLGenerator.statementToCode(block, 'message', HTMLGenerator.ORDER_ATOMIC);
  var code = '\nfunction ' + functionName + '() {\n  alert("' + message +'");}\n';
  return code;
};

//div with class
Blockly.Blocks['html_div_with_class'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Div");
    this.appendDummyInput()
        .appendField("ID:")
        .appendField(new Blockly.FieldTextInput("none"), "id");
    this.appendValueInput("CLASSNAME")
        .setCheck("String")
        .appendField("class");
    this.appendValueInput("CSS")
        .setCheck("String")
        .appendField("css");
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("creates a html <div> element, with added fields needed to use W3.CSS and CSS elements");
    this.setHelpUrl("");
  }
};

HTMLGenerator['html_div_with_class'] = function(block) {
  var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
  var cssname = HTMLGenerator.valueToCode(block, 'CSS', Blockly.JavaScript.ORDER_NONE);
  var content = HTMLGenerator.statementToCode(block, 'CONTENT');
  var idValue = block.getFieldValue('id');
  
  var code = '<div';
  code += ' class="' + classname + '" style="' + cssname;
  if (idValue && idValue !== 'none') {
    code += ' " id="' + idValue;
  }
  code += '">\n' + content + '</div>\n';
  return code;
};

//w3-bar
Blockly.Blocks['w3_bar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Bar");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Creates a bar element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_bar'] = function(block) {
  var code = 'w3-bar';
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [code + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-color
Blockly.Blocks['w3_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color")
        .appendField(new Blockly.FieldDropdown([
            ["Red", "w3-red"],
            ["Pink", "w3-pink"],
            ["Purple", "w3-purple"],
            ["Deep Purple", "w3-deep-purple"],
            ["Indigo", "w3-indigo"],
            ["Blue", "w3-blue"],
            ["Light Blue", "w3-light-blue"],
            ["Cyan", "w3-cyan"],
            ["Aqua", "w3-aqua"],
            ["Teal", "w3-teal"],
            ["Green", "w3-green"],
            ["Light Green", "w3-light-green"],
            ["Lime", "w3-lime"],
            ["Sand", "w3-sand"],
            ["Khaki", "w3-khaki"],
            ["Yellow", "w3-yellow"],
            ["Amber", "w3-amber"],
            ["Orange", "w3-orange"],
            ["Deep Orange", "w3-deep-orange"],
            ["Blue Gray", "w3-blue-gray"],
            ["Brown", "w3-brown"],
            ["Light Gray", "w3-light-gray"],
            ["Gray", "w3-gray"],
            ["Dark Gray", "w3-dark-gray"],
            ["Pale Red", "w3-pale-red"],
            ["Pale Yellow", "w3-pale-yellow"],
            ["Pale Green", "w3-pale-green"],
            ["Pale Blue", "w3-pale-blue"],
            ["White", "w3-white"],
            ["Black", "w3-black"]
        ]), "COLOR");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Changes a color to an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_color'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//highlight-color
Blockly.Blocks['w3_highlight_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Hover highlight color")
        .appendField(new Blockly.FieldDropdown([
            ["Red", "red"],
            ["Pink", "pink"],
            ["Purple", "purple"],
            ["Deep Purple", "deep-purple"],
            ["Indigo", "indigo"],
            ["Blue", "blue"],
            ["Light Blue", "light-blue"],
            ["Cyan", "cyan"],
            ["Aqua", "aqua"],
            ["Teal", "teal"],
            ["Green", "green"],
            ["Light Green", "light-green"],
            ["Lime", "lime"],
            ["Sand", "sand"],
            ["Khaki", "khaki"],
            ["Yellow", "yellow"],
            ["Amber", "amber"],
            ["Orange", "orange"],
            ["Deep Orange", "deep-orange"],
            ["Blue Gray", "blue-gray"],
            ["Brown", "brown"],
            ["Light Gray", "light-gray"],
            ["Gray", "gray"],
            ["Dark Gray", "dark-gray"],
            ["Pale Red", "pale-red"],
            ["Pale Yellow", "pale-yellow"],
            ["Pale Green", "pale-green"],
            ["Pale Blue", "pale-blue"]
        ]), "HIGHLIGHT_COLOR");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Adds a color on an object when hover on");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_highlight_color'] = function(block) {
  var color = block.getFieldValue('HIGHLIGHT_COLOR');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-hover-' + color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//highlight text
Blockly.Blocks['w3_hover_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text hover color")
        .appendField(new Blockly.FieldDropdown([
            ["Red", "red"],
            ["Pink", "pink"],
            ["Purple", "purple"],
            ["Deep Purple", "deep-purple"],
            ["Indigo", "indigo"],
            ["Blue", "blue"],
            ["Light Blue", "light-blue"],
            ["Cyan", "cyan"],
            ["Aqua", "aqua"],
            ["Teal", "teal"],
            ["Green", "green"],
            ["Light Green", "light-green"],
            ["Lime", "lime"],
            ["Sand", "sand"],
            ["Khaki", "khaki"],
            ["Yellow", "yellow"],
            ["Amber", "amber"],
            ["Orange", "orange"],
            ["Deep Orange", "deep-orange"],
            ["Blue Gray", "blue-gray"],
            ["Brown", "brown"],
            ["Light Gray", "light-gray"],
            ["Gray", "gray"],
            ["Dark Gray", "dark-gray"],
            ["Pale Red", "pale-red"],
            ["Pale Yellow", "pale-yellow"],
            ["Pale Green", "pale-green"],
            ["Pale Blue", "pale-blue"],
            ["White", "white"]
        ]), "HOVER_TEXT_COLOR");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Adds a color to a text when hovered over them");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_hover_text'] = function(block) {
  var color = block.getFieldValue('HOVER_TEXT_COLOR');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-hover-text-' + color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3 container
Blockly.Blocks['w3_container'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Container");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Creates a container element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_container'] = function(block) {
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-container ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-panel
Blockly.Blocks['w3_panel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Panel");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Creates a panel element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_panel'] = function(block) {
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-panel ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-border-color
Blockly.Blocks['w3_border_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Border color")
        .appendField(new Blockly.FieldDropdown([["Red","red"], ["Pink","pink"], ["Purple","purple"], ["Deep Purple","deep-purple"], ["Indigo","indigo"], ["Blue","blue"], ["Light Blue","light-blue"], ["Cyan","cyan"], ["Aqua","aqua"], ["Teal","teal"], ["Green","green"], ["Light Green","light-green"], ["Lime","lime"], ["Sand","sand"], ["Khaki","khaki"], ["Yellow","yellow"], ["Amber","amber"], ["Orange","orange"], ["Deep Orange","deep-orange"], ["Blue Gray","blue-gray"], ["Brown","brown"], ["Light Gray","light-gray"], ["Gray","gray"], ["Dark Gray","dark-gray"], ["Pale Red","pale-red"], ["Pale Yellow","pale-yellow"], ["Pale Green","pale-green"], ["Pale Blue","pale-blue"]]), "COLOR");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Adds a color to the border");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_border_color'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-border-' + color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-border
Blockly.Blocks['w3_border'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Border")
        .appendField(new Blockly.FieldDropdown([
          ["Adds borders (top, right, bottom, left) to an element","w3-border"],
          ["Adds a top border to an element","w3-border-top"],
          ["Adds a right border to an element","w3-border-right"],
          ["Adds a bottom border to an element","w3-border-bottom"],
          ["Adds a left border to an element","w3-border-left"],
          ["Removes all borders","w3-border-0"],
          ["Displays the border in a specified color (like red, blue, etc)","w3-border-color"],
          ["Adds a hoverable border color","w3-hover-border-color"],
          ["Adds a thick bottom border to an element","w3-bottombar"],
          ["Adds a thick left border to an element","w3-leftbar"],
          ["Adds a thick right border to an element","w3-rightbar"],
          ["Adds a thick top border to an element","w3-topbar"]]), "BORDER");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Adds various borders to an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_border'] = function(block) {
  var border = block.getFieldValue('BORDER');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [border + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-cards
Blockly.Blocks['w3_cards'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Card")
        .appendField(new Blockly.FieldDropdown([
          ["2px bordered shadow","w3-card"],
          ["4px bordered shadow","w3-card-4"]
        ]), "CARD");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Makes a card element with a shadow of either 2px or 4px");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_cards'] = function(block) {
  var card = block.getFieldValue('CARD');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [card + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};


//w3 text size
Blockly.Blocks['w3_text_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text size")
        .appendField(new Blockly.FieldDropdown([
          ["Tiny","w3-tiny"],
          ["Small","w3-small"],
          ["Medium","w3-medium"],
          ["Large","w3-large"],
          ["Extra Large","w3-xlarge"],
          ["Extra Extra Large","w3-xxlarge"],
          ["Extra Extra Extra Large","w3-xxxlarge"],
          ["Jumbo","w3-jumbo"]
        ]), "SIZE");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Sets the size of a text inside an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_text_size'] = function(block) {
  var size = block.getFieldValue('SIZE');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [size + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//font type
Blockly.Blocks['w3_font_type'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Font type")
        .appendField(new Blockly.FieldDropdown([
          ["Serif","w3-serif"],
          ["Sans Serif","w3-sans-serif"],
          ["Monospace","w3-monospace"],
          ["Cursive","w3-cursive"]
        ]), "FONT");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Changes the font type of text inside an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_font_type'] = function(block) {
  var font = block.getFieldValue('FONT');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [font + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3 text effect
Blockly.Blocks['w3_text_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text effects")
        .appendField(new Blockly.FieldDropdown([
          ["Left Align","w3-left-align"],
          ["Right Align","w3-right-align"],
          ["Center","w3-center"],
          ["Wide","w3-wide"],
          ["Opacity","w3-opacity"]
        ]), "EFFECT");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Various text effects, which can be celected from a dropdown");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_text_effect'] = function(block) {
  var effect = block.getFieldValue('EFFECT');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [effect + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3 round
Blockly.Blocks['w3_round'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Round")
        .appendField(new Blockly.FieldDropdown([
          ["Border radius 4px", "w3-round"],
          ["Border radius 2px", "w3-round-small"],
          ["Border radius 4px - medium", "w3-round-medium"],
          ["Border radius 8px", "w3-round-large"],
          ["Border radius 16px", "w3-round-xlarge"],
          ["Border radius 32px", "w3-round-xxlarge"]
        ]), "ROUNDED");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Rounds an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_round'] = function(block) {
  var rounded = block.getFieldValue('ROUNDED');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [rounded + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//circle
Blockly.Blocks['w3_circle'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Circle");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("Makes an element circular");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_circle'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-circle ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

//w3 padding
  Blockly.Blocks['w3_padding'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Padding")
            .appendField(new Blockly.FieldDropdown([
              ["Padding 16px top and bottom", "w3-padding-16"],
              ["Padding 24px top and bottom", "w3-padding-24"],
              ["Padding 32px top and bottom", "w3-padding-32"],
              ["Padding 48px top and bottom", "w3-padding-48"],
              ["Padding 64px top and bottom", "w3-padding-64"],
              ["Padding 4px top and bottom, and 8px left and right.", "w3-padding-small"],
              ["Padding 8px top and bottom, and 16px left and right.", "w3-padding"],
              ["Padding 12px top and bottom, and 24px left and right.", "w3-padding-large"],
              ["Padding 24px on top", "w3-padding-top-24"],
              ["Padding 32px on top", "w3-padding-top-32"],
              ["Padding 48px on top", "w3-padding-top-48"],
              ["w3-padding-top-64", "Padding 64px on top"]
            ]), "PADDING");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Various padding options for elements");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_padding'] = function(block) {
  var padding = block.getFieldValue('PADDING');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [padding + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3 margin

Blockly.Blocks['w3_margin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Margin")
        .appendField(new Blockly.FieldDropdown([
          ["", "w3-margin"],
          ["Top","w3-margin-top"],
          ["Right","w3-margin-right"],
          ["Bottom","w3-margin-bottom"],
          ["Left","w3-margin-left"],
          ["All", "w3-margin"],
          ["Section", "w3-section"]
        ]), "MARGIN");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("w3-margin / top / roght / bottom / left / section - adds margins to an element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_margin'] = function(block) {
  var margin = block.getFieldValue('MARGIN');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [margin + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3 display container
Blockly.Blocks['w3_display_container'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Display container");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("The w3-display-container class can be used to make an element a block-level element.");
  this.setHelpUrl("https://www.w3schools.com/w3css/w3css_display.asp");
  }
  };

  HTMLGenerator['w3_display_container'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', HTMLGenerator.ORDER_NONE) || '';
    return ['<div class="w3-display-container">' + nextBlock + '</div>\n', HTMLGenerator.ORDER_ATOMIC];
    };

    //w3 display
    Blockly.Blocks['w3_display'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Display container")
            .appendField(new Blockly.FieldDropdown([
              ["Container for w3-display-classes","w3-display-container"],
              ["Displays content at the top left corner","w3-display-topleft"],
              ["Displays content at the top right corner","w3-display-topright"],
              ["Displays content at the bottom left corner","w3-display-bottomleft"],
              ["Displays content at the bottom right corner","w3-display-bottomright"],
              ["Displays content to the left (middle left)","w3-display-left"],
              ["Displays content to the right (middle right)","w3-display-right"],
              ["Displays content in the middle (center)","w3-display-middle"],
              ["Displays content at the top middle","w3-display-topmiddle"],
              ["Displays content at the bottom middle","w3-display-bottommiddle"],
              ["Displays content at a specified position","w3-display-position"],
              ["Displays content on hover","w3-display-hover"]
            ]), "DISPLAY");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Display container and other display options like the placement of an element");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_display'] = function(block) {
      var display = block.getFieldValue('DISPLAY');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [display + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

//w3 button
    Blockly.Blocks['w3_button'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Button");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-button - creates a button element");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_button'] = function(block) {
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
      var content = HTMLGenerator.statementToCode(block, 'CONTENT');
      
      var code = '<button';
      code += ' class="' + classname;
      code += '">\n' + content + '</button>\n';
      return code;
    };
    
    //Button hover
    Blockly.Blocks['button_hover_color'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Button hover color")
            .appendField(new Blockly.FieldDropdown([
              ["Red","red"],
              ["Pink","pink"],
              ["Purple","purple"],
              ["Deep Purple","deep-purple"],
              ["Indigo","indigo"],
              ["Blue","blue"],
              ["Light Blue","light-blue"],
              ["Cyan","cyan"],
              ["Aqua","aqua"],
              ["Teal","teal"],
              ["Green","green"],
              ["Light Green","light-green"],
              ["Lime","lime"],
              ["Sand","sand"],
              ["Khaki","khaki"],
              ["Yellow","yellow"],
              ["Amber","amber"],
              ["Orange","orange"],
              ["Deep Orange","deep-orange"],
              ["Brown","brown"],
              ["Blue Grey","blue-grey"],
              ["Light Grey","light-grey"],
              ["Grey","grey"],
              ["Dark Grey","dark-grey"],
              ["Pale Red","pale-red"],
              ["Pale Yellow","pale-yellow"],
              ["Pale Green","pale-green"],
              ["Pale Blue","pale-blue"]
            ]), "COLOR");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("Adds a color to a button selected from a list");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['button_hover_color'] = function(block) {
      var color = block.getFieldValue('COLOR');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return ['w3-hover-' + color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3 table
    Blockly.Blocks['w3_table'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Table");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-table - creates a Table element");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_table'] = function(block) {
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
      var content = HTMLGenerator.statementToCode(block, 'CONTENT');
      
      var code = '<table';
      code += ' class="' + classname;
      code += '">\n' + content + '</table>\n';
      return code;
    };


    //Table options
    Blockly.Blocks['w3_table_options'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Table options")
            .appendField(new Blockly.FieldDropdown([
              ["Striped table","w3-striped"],
              ["Bordered table","w3-border"],
              ["Bordered lines","w3-bordered"],
              ["Centered table content","w3-centered"],
              ["Hoverable table","w3-hoverable"]
            ]), "TABLE_OPTION");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3-striped/bordered/border/centered/hoverable - table options");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_table_options'] = function(block) {
      var table_option = block.getFieldValue('TABLE_OPTION');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [table_option + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3 list
    Blockly.Blocks['w3_list'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("List");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("<ul> - creates an unordered list element");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_list'] = function(block) {
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
      var content = HTMLGenerator.statementToCode(block, 'CONTENT');
      
      var code = '<ul';
      code += ' class="' + classname;
      code += '">\n' + content + '</ul>\n';
      return code;
    };

    //w3 opacity
    Blockly.Blocks['w3_opacity_options'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Opacity")
            .appendField(new Blockly.FieldDropdown([
              ["Minimum","w3-opacity-min"],
              ["Medium","w3-opacity"],
              ["Maximum","w3-opacity-max"]
            ]), "OPACITY_OPTION");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3-opacity / min / max - sets a visual Opacity visual effect on an element");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_opacity_options'] = function(block) {
      var opacity_option = block.getFieldValue('OPACITY_OPTION');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [opacity_option + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3 grayscale
    Blockly.Blocks['w3_grayscale_options'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Grayscale")
            .appendField(new Blockly.FieldDropdown([
              ["Minimum","w3-grayscale-min"],
              ["Medium","w3-grayscale"],
              ["Maximum","w3-grayscale-max"]
            ]), "GRAYSCALE_OPTION");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3-grayscale / min/max - set visual Grayslace option on an element");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_grayscale_options'] = function(block) {
      var opacity_option = block.getFieldValue('GRAYSCALE_OPTION');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [opacity_option + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3-sepia
    Blockly.Blocks['w3_sepia_options'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Sepia")
            .appendField(new Blockly.FieldDropdown([
              ["Minimum","w3-sepia-min"],
              ["Medium","w3-sepia"],
              ["Maximum","w3-sepia-max"]
            ]), "SEPIA_OPTION");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3_sepia/min/max - adds a visual Sepia option");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_sepia_options'] = function(block) {
      var opacity_option = block.getFieldValue('SEPIA_OPTION');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [opacity_option + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3-hover image options
    Blockly.Blocks['w3_hover_visual_options'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Visual properties when Hovering")
            .appendField(new Blockly.FieldDropdown([
              ["Hover opacity ON","w3-hover-opacity"],
              ["Hover grayscale ON", "w3-hover-grayscale"],
              ["Hover sepia ON", "w3-hover-sepia"],
              ["Hover opacity OFF","w3-hover-opacity-off"],
              ["Hover grayscale OFF", "w3-hover-grayscale-off"],
              ["Hover sepia OFF", "w3-hover-sepia-off"],
            ]), "HOVER_VISUAL_OPTION");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3-hover-opacity / grayscale / sepia / on / off - defines visual options which will be applied when hovering over an element");
        this.setHelpUrl("");
      }
    };

    HTMLGenerator['w3_hover_visual_options'] = function(block) {
      var opacity_option = block.getFieldValue('HOVER_VISUAL_OPTION');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return [opacity_option + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //w3-form (same as button)
    Blockly.Blocks['w3_form'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Form");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-form - defines a form");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_form'] = function(block) {
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
      var content = HTMLGenerator.statementToCode(block, 'CONTENT');
      
      var code = '<form';
      code += ' class="' + classname;
      code += '">\n' + content + '</form>\n';
      return code;
    };

    //w3-input_text (same as button)
    Blockly.Blocks['w3_text_input'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Text input");
        this.appendDummyInput()
            .appendField("placeholder")
            .appendField(new Blockly.FieldTextInput(""), "PLACEHOLDER");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-input - defines a text input element");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_text_input'] = function(block) {
      var placeholder = block.getFieldValue('PLACEHOLDER');
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
    
      var code = '<input';
      code += ' class="w3-input ' + classname;
      code += '" type="text" placeholder="' + placeholder;
      code += '">\n';
      return code;
    };

    //label
    Blockly.Blocks['html_label'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Label")
            .appendField(new Blockly.FieldTextInput(""), "TEXT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(100);
        this.setTooltip("<label> defines a HTML tag");
        this.setHelpUrl("https://www.w3schools.com/tags/tag_label.asp");
      }
    };

    HTMLGenerator['html_label'] = function(block) {
      var text = block.getFieldValue('TEXT');
      var htmlFor = HTMLGenerator.valueToCode(block, 'FOR', Blockly.JavaScript.ORDER_ATOMIC);
    
      var code = '<label>' + text + '</label>\n';
      return code;
    };

    //W3 cehckboxes (similar to text_input)
    Blockly.Blocks['w3_checkbox_input'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Checkbox input");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-check - defines a checkbox input");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_checkbox_input'] = function(block) {
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
    
      var code = '<input';
      code += ' class="w3-check ' + classname;
      code += '" type="checkbox">\n';
      return code;
    };

    //W3 cehckboxes (similar to text_input)
    Blockly.Blocks['w3_radio_input'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Radio input");
        this.appendDummyInput()
            .appendField("name")
            .appendField(new Blockly.FieldTextInput(""), "NAME");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-radio - defines a radio input");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_radio_input'] = function(block) {
      var name = block.getFieldValue('NAME');
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
    
      var code = '<input';
      code += ' class="w3-radio ' + classname;
      code += '" type="radio"' + ' name="' + name + '">\n';
      return code;
    };

    //W3 options (similar to form)
    Blockly.Blocks['w3_select_options_input'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Select input");
        this.appendDummyInput()
            .appendField("name")
            .appendField(new Blockly.FieldTextInput(""), "NAME");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.appendStatementInput("CONTENT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("w3-select - defines a selection options input element");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_select_options_input'] = function(block) {
      var name = block.getFieldValue('NAME');
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
      var content = HTMLGenerator.statementToCode(block, 'CONTENT');
      
      var code = '<select';
      code += ' class="w3-select ' + classname;
      code += '" name="' + name + '">\n' + content + '</select>\n';
      return code;
    };

  //Select options - placeholder option similar to text


  Blockly.Blocks['w3_select_options_placeholder'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Options placeholder");
      this.appendDummyInput()
          .appendField("Placeholder text")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("An options item placeholder, has no value and a placeholder text");
      this.setHelpUrl("");
    }
  };
  
  HTMLGenerator['w3_select_options_placeholder'] = function(block) {
    var name = block.getFieldValue('NAME');
    var content = HTMLGenerator.statementToCode(block, 'CONTENT');
    
    var code = '<option value="" disabled selected>' + name + '</option>\n' 
    return code;
  };


  //Select options blocks (similar to the placeholder one)
  Blockly.Blocks['w3_select_options'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Options item");
        this.appendDummyInput()
          .appendField("Value")
          .appendField(new Blockly.FieldTextInput(""), "VALUE");
      this.appendDummyInput()
          .appendField("Placeholder text")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("<option value - defines an options item");
      this.setHelpUrl("");
    }
  };
  
  HTMLGenerator['w3_select_options'] = function(block) {
    var name = block.getFieldValue('NAME');
    var VALUE = block.getFieldValue('VALUE');
    
    var code = '<option value="'+ VALUE + '">' + name + '</option>\n' 
    return code;
  };

//badge - similar to radio input
  Blockly.Blocks['w3_badge'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Badge");
      this.appendDummyInput()
          .appendField("name")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.appendValueInput("CLASSNAME")
          .setCheck("String")
          .appendField("class");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("<span class=w3-badge - defines a badge element");
      this.setHelpUrl("");
    }
  };
  
  HTMLGenerator['w3_badge'] = function(block) {
    var name = block.getFieldValue('NAME');
    var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
  
    var code = '<span';
    code += ' class="w3-badge ' + classname;
    code += '">' + name + '</span>\n';
    return code;
  };

  //badge - similar to radio input
  Blockly.Blocks['w3_tags'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Tag");
      this.appendDummyInput()
          .appendField("name")
          .appendField(new Blockly.FieldTextInput(""), "NAME");
      this.appendValueInput("CLASSNAME")
          .setCheck("String")
          .appendField("class");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("<span class=w3-tag  - defines a tag element");
      this.setHelpUrl("");
    }
  };
  
  HTMLGenerator['w3_tags'] = function(block) {
    var name = block.getFieldValue('NAME');
    var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
  
    var code = '<span';
    code += ' class="w3-tag ' + classname;
    code += '">' + name + '</span>\n';
    return code;
  };

//Responsive class - based on hover text
Blockly.Blocks['w3_resp_class'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Half / third / twothird")
        .appendField(new Blockly.FieldDropdown([
            ["Occupies 1/2 of the window", "half"],
            ["Occupies 1/3 of the window", "third"],
            ["Occupies 2/3 of the window", "twothird"],
            ["Occupies 1/4 of the window", "quarter"],
            ["Occupies 3/4 of the window", "threequarter"],
            ["Occupies the rest of the column width", "rest"],
            ["Adds mobile-first responsiveness to a cell", "mobile"]
        ]), "RESP_CLASS");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("w3-half/third/twothird/quarter/threequarter/rest/mobile - defines how much space will an element take up in the container");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_resp_class'] = function(block) {
  var respClass = block.getFieldValue('RESP_CLASS');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-' + respClass + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//Layout class - based on hover text
Blockly.Blocks['w3_layout_class'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Cell top/middle/bottom")
        .appendField(new Blockly.FieldDropdown([
            ["Layout cell (column).", "cell"],
            ["Aligns content at the top of a cell (column).", "cell-top"],
            ["Aligns content at the vertical middle of a cell (column).", "cell-middle"],
            ["Aligns content at the bottom of a cell (column).", "cell-bottom"]
        ]), "LAYOUT_CLASS");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("w3-cell -top/-middle/-bottom - defines a cells display location");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_layout_class'] = function(block) {
  var layoutClass = block.getFieldValue('LAYOUT_CLASS');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-' + layoutClass + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//animation class
Blockly.Blocks['w3_animation_class'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Animate")
        .appendField(new Blockly.FieldDropdown([
            ["Slides in an element from the top (-300px to 0)", "animate-top"],
            ["Slides in an element from the bottom (-300px to 0)", "animate-bottom"],
            ["Slides in an element from the left (-300px to 0)", "animate-left"],
            ["Slides in an element from the right (-300px to 0)", "animate-right"],
            ["Animates an element's opacity from 0 to 1 in 0.8 seconds", "animate-opacity"],
            ["Animates an element from 0 to 100% in size", "animate-zoom"],
            ["Animates an element's opacity from 0 to 1 and 1 to 0 (fades in + fade out)", "animate-fading"],
            ["Spins an element 360 degrees", "spin"]
        ]), "ANIMATION_CLASS");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("animate-top / botton / left / right / opacity / zoom / fading - adds animation on elements");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_animation_class'] = function(block) {
  var animationClass = block.getFieldValue('ANIMATION_CLASS');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['w3-' + animationClass + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//bar-item based on circle
Blockly.Blocks['w3_bar_item'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Bar Item");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("w3-bar-item - class for the bar elements");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_bar_item'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-bar-item ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };


    //dropdown
    Blockly.Blocks['w3_dropdown'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Dropdown hover/click")
            .appendField(new Blockly.FieldDropdown([
                ["Hoverable dropdown element", "dropdown-hover"],
                ["Clickable dropdown element", "dropdown-click"]
            ]), "LAYOUT_CLASS");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3_dropdown-hover/click - makes a dropdown, appears if hover on or when clicked");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_dropdown'] = function(block) {
      var dropdownClass = block.getFieldValue('LAYOUT_CLASS');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return ['w3-' + dropdownClass + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

//dropdown item:
Blockly.Blocks['w3_dropdown_content'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Dropdown Content");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("w3_dropdown_content - used for items, which will be in a dropdown");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_dropdown_content'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-dropdown-content ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };


    Blockly.Blocks['w3_navigation_position'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("Top / Bottom")
            .appendField(new Blockly.FieldDropdown([
                ["Place navigation bar at the top", "top"],
                ["Put navigatio bar at the bottom", "bottom"]
            ]), "ANIMATION_CLASS");
        this.appendValueInput('NEXT')
            .setCheck('String');
        this.setOutput(true, "String");
        this.setColour(230);
        this.setTooltip("w3-top and w3-bottom - navigation bar possition");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_navigation_position'] = function(block) {
      var animationClass = block.getFieldValue('ANIMATION_CLASS');
      var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
      return ['w3-' + animationClass + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    Blockly.Blocks['w3_a_hyperlink'] = {
      init: function() {
        this.appendDummyInput()
            .appendField("<a> hyperlink");
        this.appendDummyInput()
            .appendField("To:")
            .appendField(new Blockly.FieldTextInput(""), "HYPERLINK");
          this.appendDummyInput()
            .appendField("Text:")
            .appendField(new Blockly.FieldTextInput(""), "TEXT");
        this.appendValueInput("CLASSNAME")
            .setCheck("String")
            .appendField("class");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("<a> hyperlink - with W3.CSS class modifications possibility");
        this.setHelpUrl("");
      }
    };
    
    HTMLGenerator['w3_a_hyperlink'] = function(block) {
      var hyperlink = block.getFieldValue('HYPERLINK');
      var text = block.getFieldValue('TEXT');
      var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
    
      var code = '<a ';
      code += 'href="'+ hyperlink +'" class="' + classname;
      code += '">' + text + '</a>\n';
      return code;
    };


    //col, s m l 1-12

    //w3-col
    Blockly.Blocks['w3_col'] = {
      init: function() {
      this.appendDummyInput()
      .appendField("Col - Column container");
      this.appendValueInput('NEXT')
      .setCheck('String');
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("w3_col - Column container");
      this.setHelpUrl("");
      }
      };
    
      HTMLGenerator['w3_col'] = function(block) {
        var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
        return ['w3-col ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
        };


//lms 1-12
Blockly.Blocks['w3_responsive_size'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Responsive size selector")
        .appendField(new Blockly.FieldDropdown([
          ["large","l"], ["medium","m"], ["small","s"]
        ]), "SIZE")
        .appendField(new Blockly.FieldDropdown([
          ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","11"], ["12","12"]
        ]), "SIZENUM");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("l / m / s 1-12 - W3 Responsive size selector");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_responsive_size'] = function(block) {
  var size = block.getFieldValue('SIZE');
  var sizeNum = block.getFieldValue('SIZENUM');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [size + sizeNum + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//row
Blockly.Blocks['w3_row'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Row");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("w3-row - Container for one row of fluid responsive content");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_row'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-row ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

//w3-block
    Blockly.Blocks['w3_button_class'] = {
      init: function() {
      this.appendDummyInput()
      .appendField("Button");
      this.appendValueInput('NEXT')
      .setCheck('String');
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("w3-button - a class for the W3.CSS button");
      this.setHelpUrl("");
      }
      };
    
      HTMLGenerator['w3_button_class'] = function(block) {
        var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
        return ['w3-button ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
        };


Blockly.Blocks['w3_block'] = {
      init: function() {
      this.appendDummyInput()
      .appendField("Block");
      this.appendValueInput('NEXT')
      .setCheck('String');
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("w3_block - class that can be used to define a full width w3-button");
      this.setHelpUrl("");
      }
      };
    
      HTMLGenerator['w3_block'] = function(block) {
        var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
        return ['w3-block ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
        };

      //image
      Blockly.Blocks['w3_image'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("<img> Image");
          this.appendDummyInput()
              .appendField("Link to image:")
              .appendField(new Blockly.FieldTextInput(""), "HYPERLINK");
            this.appendDummyInput()
              .appendField("Alternative:")
              .appendField(new Blockly.FieldTextInput(""), "ALT");
          this.appendValueInput("CLASSNAME")
              .setCheck("String")
              .appendField("class");
          this.appendValueInput("CSS")
              .setCheck("String")
              .appendField("css");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(230);
          this.setTooltip("class=w3-image - contains an image with aditional fields, which might be useful for W3.CSS manipulations");
          this.setHelpUrl("");
        }
      };
      
      HTMLGenerator['w3_image'] = function(block) {
        var hyperlink = block.getFieldValue('HYPERLINK');
        var alt = block.getFieldValue('ALT');
        var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
        var cssname = HTMLGenerator.valueToCode(block, 'CSS', Blockly.JavaScript.ORDER_NONE);
      
        var code = '<img ';
        code += 'src="'+ hyperlink +'" alt="' + alt + '" class="w3-image ' + classname + '" style="' + cssname + '"';
        code += '>\n';
        return code;
      };

        //w3-color
Blockly.Blocks['w3_text_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Text Color")
        .appendField(new Blockly.FieldDropdown([
            ["Red", "w3-text-red"],
            ["Pink", "w3-text-pink"],
            ["Purple", "w3-text-purple"],
            ["Deep Purple", "w3-text-deep-purple"],
            ["Indigo", "w3-text-indigo"],
            ["Blue", "w3-text-blue"],
            ["Light Blue", "w3-text-light-blue"],
            ["Cyan", "w3-text-cyan"],
            ["Aqua", "w3-text-aqua"],
            ["Teal", "w3-text-teal"],
            ["Green", "w3-text-green"],
            ["Light Green", "w3-text-light-green"],
            ["Lime", "w3-text-lime"],
            ["Sand", "w3-text-sand"],
            ["Khaki", "w3-text-khaki"],
            ["Yellow", "w3-text-yellow"],
            ["Amber", "w3-text-amber"],
            ["Orange", "w3-text-orange"],
            ["Deep Orange", "w3-text-deep-orange"],
            ["Blue Gray", "w3-text-blue-gray"],
            ["Brown", "w3-text-brown"],
            ["Light Gray", "w3-text-light-gray"],
            ["Gray", "w3-text-gray"],
            ["Dark Gray", "w3-text-dark-gray"],
            ["Pale Red", "w3-text-pale-red"],
            ["Pale Yellow", "w3-text-pale-yellow"],
            ["Pale Green", "w3-text-pale-green"],
            ["Pale Blue", "w3-text-pale-blue"],
            ["White", "w3-text-white"],
            ["Black", "w3-text-black"]
        ]), "COLOR");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("w3_text_color - set's texts color");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_text_color'] = function(block) {
  var color = block.getFieldValue('COLOR');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return [color + ' ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//w3-content

Blockly.Blocks['w3_content'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Content");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("w3_content - Container for fixed size centered content");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_content'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-content ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };

    //row-padding
    Blockly.Blocks['w3_row_padding'] = {
      init: function() {
      this.appendDummyInput()
      .appendField("Row Padding");
      this.appendValueInput('NEXT')
      .setCheck('String');
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("w3_row_padding - Row where all columns have a default padding");
      this.setHelpUrl("");
      }
      };
    
      HTMLGenerator['w3_row_padding'] = function(block) {
        var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
        return ['w3-row-padding ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
        };
///some css blocks

//currently needed: max-height, width, height

//.css max-height
Blockly.Blocks['css_max_height'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Max Height")
      .appendField(new Blockly.FieldTextInput("0"), "numeric_value")
      .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
    this.setOutput(true, "String");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setColour(260);
    this.setTooltip("This block generates: Int px / % / em / rem");
    this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
  }
};

HTMLGenerator['css_max_height'] = function (block) {
  var numeric_value = block.getFieldValue('numeric_value');
  var unit = block.getFieldValue('unit');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['max-height: ' + numeric_value + unit + ';\n' +  nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//.css width
Blockly.Blocks['css_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Width")
      .appendField(new Blockly.FieldTextInput("0"), "numeric_value")
      .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
    this.setOutput(true, "String");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setColour(260);
    this.setTooltip("This block generates: Int px / % / em / rem");
    this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
  }
};

HTMLGenerator['css_width'] = function (block) {
  var numeric_value = block.getFieldValue('numeric_value');
  var unit = block.getFieldValue('unit');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['width: ' + numeric_value + unit + ';\n' +  nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//.css height
Blockly.Blocks['css_height'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Height")
      .appendField(new Blockly.FieldTextInput("0"), "numeric_value")
      .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
    this.setOutput(true, "String");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setColour(260);
    this.setTooltip("This block generates: Int px / % / em / rem");
    this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
  }
};

HTMLGenerator['css_height'] = function (block) {
  var numeric_value = block.getFieldValue('numeric_value');
  var unit = block.getFieldValue('unit');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['height: ' + numeric_value + unit + ';\n' +  nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};

//.css max-width
Blockly.Blocks['css_max_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("Max Width")
      .appendField(new Blockly.FieldTextInput("0"), "numeric_value")
      .appendField(new Blockly.FieldDropdown([["px", "px"], ["%", "%"], ["em", "em"], ["rem", "rem"]]), "unit");
    this.setOutput(true, "String");
    this.appendValueInput('NEXT')
        .setCheck('String');
    this.setColour(260);
    this.setTooltip("This block generates: Int px / % / em / rem");
    this.setHelpUrl("https://www.w3schools.com/cssref/pr_padding.asp");
  }
};

HTMLGenerator['css_max_width'] = function (block) {
  var numeric_value = block.getFieldValue('numeric_value');
  var unit = block.getFieldValue('unit');
  var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
  return ['max-width: ' + numeric_value + unit + ';\n' +  nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.Blocks['w3_modal'] = {
  init: function() {
  this.appendDummyInput()
  .appendField("Modal");
  this.appendValueInput('NEXT')
  .setCheck('String');
  this.setOutput(true, "String");
  this.setColour(230);
  this.setTooltip("w3_block - create a modal element");
  this.setHelpUrl("");
  }
  };

  HTMLGenerator['w3_modal'] = function(block) {
    var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
    return ['w3-modal ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
    };


Blockly.Blocks['w3_modal_content'] = {
      init: function() {
      this.appendDummyInput()
      .appendField("Modal Content");
      this.appendValueInput('NEXT')
      .setCheck('String');
      this.setOutput(true, "String");
      this.setColour(230);
      this.setTooltip("w3_modal_content - defines content for the modal block");
      this.setHelpUrl("");
      }
      };
    
      HTMLGenerator['w3_modal_content'] = function(block) {
        var nextBlock = HTMLGenerator.valueToCode(block, 'NEXT', Blockly.JavaScript.ORDER_ATOMIC) || '';
        return ['w3-modal-content ' + nextBlock, Blockly.JavaScript.ORDER_ATOMIC];
        };

//js for button and modal
Blockly.Blocks['w3_button_modal_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button for showing modal");
    this.appendValueInput("CLASSNAME")
        .setCheck("String")
        .appendField("class");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("X"), "ELEMENT_ID");
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("w3-button - creates a button element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_button_modal_show'] = function(block) {
  var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
  var element_id = block.getFieldValue('ELEMENT_ID');
  var content = HTMLGenerator.statementToCode(block, 'CONTENT');
  
  var code = '<button';
  code += ' class="w3-button ' + classname;
  code += '" onclick="document.getElementById(\'' + element_id + '\').style.display=\'block\'"';
  code += '>\n' + content + '</button>\n';
  return code;
};


Blockly.Blocks['w3_button_modal_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button for hiding modal");
    this.appendValueInput("CLASSNAME")
        .setCheck("String")
        .appendField("class");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("X"), "ELEMENT_ID");
    this.appendStatementInput("CONTENT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("w3-button - creates a button element");
    this.setHelpUrl("");
  }
};

HTMLGenerator['w3_button_modal_hide'] = function(block) {
  var classname = HTMLGenerator.valueToCode(block, 'CLASSNAME', Blockly.JavaScript.ORDER_NONE);
  var element_id = block.getFieldValue('ELEMENT_ID');
  var content = HTMLGenerator.statementToCode(block, 'CONTENT');
  
  var code = '<button';
  code += ' class="w3-button ' + classname;
  code += '" onclick="document.getElementById(\'' + element_id + '\').style.display=\'none\'"';
  code += '>\n' + content + '</button>\n';
  return code;
};