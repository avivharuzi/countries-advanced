class RouteController {
    static error(res, msg) {
        res.status(404).send({
            response: false,
            message: msg
        });
    }
}

module.exports = RouteController;
