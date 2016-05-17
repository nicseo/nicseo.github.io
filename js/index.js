var HelloWorld = React.createClass({
    render: function() {
        return <div>Hello, {this.props.name}!</div>;
    }
});

React.render(new HelloWorld({ name: "Nicole Seo" }), document.body);