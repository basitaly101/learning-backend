const express = require('express');
const app = express();


app.use((req ,res , next) => {
    console.log('middle were chala');
    next()
})
app.use((req , res, next) => {
    console.log('middle dobara chala');
    next()
    
})

app.get("/" , (req ,res) => {
    res.send("hello world");
})
app.get("/profile" , (req , res, next) => {
  return next(new Error('something went wrong'))
})
app.use((error , req , res , next) =>{
    console.error(error.stack)
    res.status(500).send("error 500")
    
})
app.listen(3000 , () => {
    console.log('server is running');
    
});