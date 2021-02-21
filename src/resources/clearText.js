const clearText = (str) => {
  let newStr = str;
  // console.log(str);

  if (str.includes('&quot;')) {
    newStr = newStr.replace(/\&quot;/g, "'");
  }

  if (str.includes('&#039;')) {
    newStr = newStr.replace(/\&#039;/g, '`');
  }

  if (str.includes('&eacute;')) {
    newStr = newStr.replace(/\&eacute;/g, 'é');
  }

  if (str.includes('&lt;')) {
    newStr = newStr.replace(/\&lt;/g, '<');
  }

  if (str.includes('&gt;')) {
    newStr = newStr.replace(/\&gt;/g, '>');
  }

  if (str.includes('&amp;')) {
    newStr = newStr.replace(/\&amp;/g, '&');
  }

  return newStr;
};

export default clearText;
