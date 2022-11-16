var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component2 = function (_React$Component) {
    _inherits(Component2, _React$Component);

    function Component2() {
        _classCallCheck(this, Component2);

        return _possibleConstructorReturn(this, (Component2.__proto__ || Object.getPrototypeOf(Component2)).apply(this, arguments));
    }

    _createClass(Component2, [{
        key: "render",
        value: function render() {
            var names = this.props.names;

            console.log(names);

            return React.createElement(
                "ul",
                null,
                names.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        item
                    );
                })
            );
        }
    }]);

    return Component2;
}(React.Component);

export default Component2;