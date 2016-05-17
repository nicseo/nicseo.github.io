var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}!</div>;
    }
});

ReactDOM.render(new HelloWorld({ name: "Nicole Seo" }), document.body);