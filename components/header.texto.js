

var HeaderTexto = React.createClass({
    getDefaultProps: function () {
        return {
            texto: 'Olá,<br> eu sou a <span>Jeliel</span><sup id="idadeSup">42</sup> e aqui você conhecerá um pouco mim <i class="fa fa-smile-o" aria-hidden="true"></i>'
        }
    },
    render: function () {
        return (
            <div id="text-header">
                <h1>{texto}</h1>
                <br />
            </div>
        )
    }
});
