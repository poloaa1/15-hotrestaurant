let tables = require("../backend/tables");
let waitlist = require("../backend/waitlist");

module.exports = (app) => {

    app.get("/api/tambes", (req, res) =>
    {
        res.json(tables);
    });
    app.get("/api/waitlist", (req, res)=>
    {
        res.json(waitlist)
    });
    app.get("/api/waitlist", (req, res)=>
    {
        if (tables.length < 5){
            tables.push(req.body);
            res.json(true);
        }
        else{
            waitlist.push(req.body);
            res.json(false);
        }
    });
    app.post("/api/clear",(req, res)=>
    {
        tables.length = 0;
        waitlist.length = 0;
        res.json({ok: true});
    });
};