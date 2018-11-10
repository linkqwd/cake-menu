// Haven't found any other way to load local JSON file
// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
var data = function loadJSON() {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'js/data.json', false);
    return xobj.onreadystatechange = function () {
        xobj.send(null);
        if (xobj.readyState == 4 && xobj.status == "200") {
            return JSON.parse(xobj.responseText)
        }
    }();
}();


data.forEach(function (el) {
    for (var item in el) {
        //console.log('item: ' + item )
        //console.log(el[item])
        for (var node in el[item]) {
            console.log(node)
            console.log(el[item][node])
        }
        makeDOMnode();
    }
});

function makeDOMnode(parentTag, parentCls, contentTag, contentCls, text) {
    var parentNode = document.createElement(parentTag);
    var contentNode = document.createElement(contentTag);
    parentNode.classList.add(parentCls);
    contentNode.classList.add(contentCls);
    contentNode.innerText = text;
    parentNode.appendChild(contentNode);
    //console.log(parentNode)
}



var listItems = document.querySelectorAll('.action-menu__list-item'),
    contentItems = document.querySelectorAll('.action-menu__content-item');
    activeListItem = '.action-menu__list-item_state_active'
    activeContentItem = '.action-menu__content-item_state_active'

listItems.forEach(function (el, index) {
    el.addEventListener('click', function () {
        deActivatePrevItem(activeListItem);
        deActivatePrevItem(activeContentItem);
        activateContentItem(this, index);
    });
});

function deActivatePrevItem(item) {
    var itemToRemove = document.querySelector(item);
    itemToRemove.classList.remove(item.slice(1));
}

function activateContentItem(item, index) {
    item.classList.add(activeListItem.slice(1));
    contentItems[index].classList.add(activeContentItem.slice(1));
}

