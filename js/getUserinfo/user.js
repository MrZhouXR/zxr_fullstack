var getUserTemplate = function (user) {
    return "\n    <a class=\"weui-cell  weui-cell_access\" href=\"javascript:\">\n        <div class=\"weui-cell__bd\">\n                <p>" + user.name + "</p>\n            </div>\n            <div class=\"weui-cell__ft\">" + user.company + "</div>\n        </a>\n    \n    ";
};
