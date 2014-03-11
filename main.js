window.onload = function() {

  var dragSrcEl = null;

  function handleDragStart(event) {
  // event.target is the source node.
  this.style.opacity = '0.4';

  dragSrcEl = this;

  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);

  };

  function handleDragOver(event) {
    if (event.preventDefault) {
       //Allows to drop.
      event.preventDefault();
    }
    // DataTransfer object!
    event.dataTransfer.dropEffect = 'move';
    return false;
  };

  function handleDragEnter(event) {
    // this /event.target is the current target
    this.classList.add('over');
  };

  function handleDragLeave(event) {
    // this is previous target element
    this.classList.remove('over');
  };

  function handleDrop(event) {
    // stops browser redirecting
    if (event.stopPropagation) {
      // stops browser redirecting
      event.stopPropagation();
    }
    // do nothing if dropping the same item
    if (dragSrcEl != this) {
      // Set the source item's HTML to the HTML of the item we dropped on.
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
  };

  function handleDragEnd(event) {
    [].forEach.call(items, function (item_drag) {
      item_drag.classList.remove('over');
    });
  };

  var items = document.querySelectorAll('#items .item');
  [].forEach.call(items, function(item_drag) {
    item_drag.addEventListener('dragstart', handleDragStart, false);
    item_drag.addEventListener('dragenter', handleDragEnter, false);
    item_drag.addEventListener('dragover', handleDragOver, false);
    item_drag.addEventListener('dragleave', handleDragLeave, false);
    item_drag.addEventListener('drop', handleDrop, false);
    item_drag.addEventListener('dragend', handleDragEnd, false);
  });
};



