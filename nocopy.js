function nocopy(callback) {
  var onDocCopy = function() {
    try {
      var
        body = document.body,
        selection = window.getSelection(),
        firstRange = selection.getRangeAt(0),
        text = callback && callback.call ? callback(selection) || '' : '',
        element = document.createElement('p');

      element.style.position = 'absolute';
      element.style.left = '-31337px';
      element.style.top = '-31337px';
      element.innerHTML = text;

      body.appendChild(element);
      selection.selectAllChildren(element);

      setTimeout(function() {
        document.body.removeChild(element);

        selection.removeAllRanges();
        selection.addRange(firstRange);
      }, 0);
    } catch (e) {
      // cry, cry, little baby!
    }
  };

  document.oncopy = onDocCopy;
}
