// Not good solution.. it's dry
//Appoach 1 - slight better = create different functions to validate user/pass and kidney
//Best solution: introduce middlewares
// like.. app.get("/health-checkup" , userMiddleware, kidneyMiddleware,function(req,res))

const express=require("express")

const app = express();

app.get("/health-checkup",function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;
    if (username != "durag" || password !=123456){
        res.status(400).json({msg:"something is up  inputs"})
        return;
    }
    if (kidneyId!=1 && kidneyId!=2){
            
        res.status(400).json({msg:"something is up with kidneys"})
        return;
        }
    res.json({msg: "Your kidney is fine.."})    

});
app.listen(4000);