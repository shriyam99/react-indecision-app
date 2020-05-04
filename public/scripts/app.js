'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.pickOption = _this.pickOption.bind(_this);
        _this.addOption = _this.addOption.bind(_this);
        _this.deleteOneOption = _this.deleteOneOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);
            if (json) this.setState(function () {
                return { options: options };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {}
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'deleteOneOption',
        value: function deleteOneOption(arg) {
            console.log(arg);
            this.setState(function (prev) {
                return { options: prev.options.filter(function (option) {
                        return option !== arg;
                    }) };
            });
        }
    }, {
        key: 'pickOption',
        value: function pickOption() {
            var index = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[index];
            alert(option);
        }
    }, {
        key: 'addOption',
        value: function addOption(option) {
            if (!option) return 'Enter valid value';else if (this.state.options.indexOf(option) !== -1) return 'Option already added';
            this.setState(function (prev) {
                return { options: [].concat(_toConsumableArray(prev.options), [option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision";
            var subtitle = "Put your life in the hands of a computer!";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0, pickOption: this.pickOption }),
                React.createElement(Options, { removeAll: this.removeAll, deleteOneOption: this.deleteOneOption, options: this.state.options }),
                React.createElement(AddOption, { onClick: this.addOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = { options: ['Jump', 'Hop'] };

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'sample title'
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.pickOption },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option'
        ),
        React.createElement(
            'ul',
            null,
            props.options.map(function (item, index) {
                return React.createElement(Option, { key: index, text: item, deleteOneOption: props.deleteOneOption });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.text,
        React.createElement(
            'button',
            { onClick: function onClick() {
                    return props.deleteOneOption(props.text);
                } },
            'Delete this'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.state = {
            error: ''
        };
        _this2.submitHandle = _this2.submitHandle.bind(_this2);
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'submitHandle',
        value: function submitHandle(e) {
            e.preventDefault();
            var option = e.target.option.value.trim();
            var error = this.props.onClick(option.trim());
            // console.log(error);
            this.setState(function () {
                return { error: error };
            });
            e.target.option.value = '';
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.submitHandle },
                    React.createElement('input', { type: 'text', placeholder: 'Enter the value', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var root = document.getElementById('root');
ReactDOM.render(React.createElement(IndecisionApp, null), root);
