/**
 * Javascript specific code for DataDirectory tool.
 * (c) 2021 SeBiMER, Ifremer
 */

function formatToolName(toolName) {
  var idx = toolName.lastIndexOf("-");
  var str = "<span class='toolName'>";
  if (idx < 0) {
    return str + toolName + "</span> ";
  }
  str += toolName.substring(0, idx).trim();
  str += "</span> - <span class='toolVersion'>";
  str += toolName.substring(idx + 1).trim();
  str += "</span> ";
  return str;
}

function formatCmdLine(appPath, toolName) {
  var str = "Cmd-line </span><span class='topicsstd'>(";
  str += appPath;
  str += ")</span>";
  return str;
}

function formatSimpleTopics(topicClass, topicName) {
  var str = "<div><span class='topics topicsbold'>";
  str += topicClass;
  str += ": </span><span class='topics'>";
  str += topicName;
  str += "</span></div>";
  return str;
}

function getButtonCode(path, indexName){
  var str =
    "<button style='margin-left:5px;' class='btn btn-xs ";
  switch (indexName) { //should be in upper case; see datadirectory python code
    case 'BLAST':
      str += " btn-success ";
      break;
    case 'BDM-ANNOT':
      str += " btn-warning ";
      break;
    case 'BOWTIE2':
      str += " btn-info ";
      break;
    case 'HISAT2':
      str += " btn-secondary ";
      break;
    default:
      str += " btn-primary ";
  }
  str +=
    "pubLink fa fa-copy externallink' data-clipboard-text='" +
    path +
    "' data-toggle='tooltip' data-placement='top' title='Click to copy path to clipboard'>";
  str += " " + indexName + "</button>";
  return str;
}

function clipboard(path, indexName) {
  new ClipboardJS('.btn');
  return getButtonCode(path, indexName);
}

function indexClipboard(tool, path) {
  if (typeof tool !== 'undefined' && typeof path !==
    'undefined') {
    if (tool.indexOf(',') !== -1 && path.indexOf(',') !== -1) {
      var lst_tool = tool.split(',');
      var lst_path = path.split(',');
    } else {
      var lst_tool = tool.split();
      var lst_path = path.split();
    }
    var str = "";
    for (let i = 0; i < lst_tool.length; i++) {
      if (lst_path[i] !== 'n/a') {
        str += clipboard(lst_path[i], lst_tool[i]);
      }
    }
    return str;
  }
}

