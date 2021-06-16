const fileTypes = [
  {
    font: "fas fa-file-excel",
    match: /.+[.](XLSX)|(XLSM)|(XLTX)|(XLTM)|(XLAM)|(XLSB)$/i,
    color: "rgb(32, 162, 102)",
  },
  {
    font: "fas fa-file-pdf",
    match: /.+[.]pdf$/i,
    color: "rgb(255, 32, 19)",
  },
  {
    font: "fas fa-file-powerpoint",
    match: /.+[.]ppt$/i,
    color: "rgb(218, 84, 1)",
  },
  {
    font: "fas fa-file-word",
    match: /.+[.]docx$/i,
    color: "rgb(24, 89, 189)",
  },
  {
    font: "fas fa-file-archive",
    match: /.+[.](rar|zip)$/i,
    color: "rgb(128, 54, 142)",
  },
];

const getFontAwesomeIcon = (txt) => {
  let font = {};
  for (let i = 0; i < fileTypes.length; i++) {
    if (fileTypes[i].match.test(txt)) {
      font = fileTypes[i];
      break;
    }
  }
  return font;
};

export { fileTypes, getFontAwesomeIcon };
