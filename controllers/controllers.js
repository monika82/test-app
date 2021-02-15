const saySomething = (_req, res, _next) => {
    res.status(200).json({
        body: 'Hello from the server!'
    });
};

module.exports.saySomething = saySomething;