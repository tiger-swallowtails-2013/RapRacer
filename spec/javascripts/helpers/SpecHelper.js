var createDomElement = function(element_type, element_id) {
  var element = document.createElement(element_type)
  element.id = element_id
  document.body.appendChild(element);
  return element;
}
