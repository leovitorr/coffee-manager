
var schedules = [];

exports.start = function(req, res, next) {
    console.log(req.body);
    schedules.push(req.body);
    res.send(200);
    return next();
}

exports.list = function(req, res, next) {
    res.json(schedules);
    return next();
}
 