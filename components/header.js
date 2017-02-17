

var Header = React.createClass({
    render: function () {
        return (
            <div id="photo-header" className="text-center">
                <HeaderAvatar imagem="imagens/avatar.png" />
                <HeaderTexto />
            </div>
        )
    }
});
