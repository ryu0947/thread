$(function () {
    const headerClone = $("#js-header").contents().clone();
    const headerCloneContainer = $("<div class= 'header-clone fixed'></div>");
    headerCloneContainer.append(headerClone);
    headerCloneContainer.appendTo("body");
});