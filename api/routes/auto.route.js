module.exports = function (app) {

    //Rutas
    //==========================================================================
    app.get('/api/auto', getAuto);

    //Funciones
    //==========================================================================

    function getAuto(req, res) {
        return res.send({ success : true });
    }
};