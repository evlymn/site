

var HeaderAvatar = React.createClass({
    getDefaultProps: function () {
        return {
            imagem: 'imagens/avatar.png'
        }
    },
    render: function () {
        return (
            <div id="photo" className="hand" data-toggle="collapse" data-target="#fotos">
                <img src={imagem} alt="avatar" />
            </div>
        )
    }
});
