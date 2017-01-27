var Oracle = React.createClass({
    getInitialState:function(){
        return { result:"Reactおみくじ"};
    },

    show: function(){ 
        var arr = ['大吉', '小吉','中吉',"吉",'凶',"大凶"];
        var index = Math.floor(Math.random()*arr.length);
        this.setState({result: arr[index]});
    },


    render: function(){
        return (
            <div>
                <p>{this.state.result}</p>
                <button onClick={this.show}>Push</button>
            </div>
        );
    }
});

ReactDOM.render(
    <Oracle />,
    document.getElementById('root')
);