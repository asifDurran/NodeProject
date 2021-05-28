import express from 'express';
const app = express();
app.use(express.static('public'))
// app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')
// app.get('/user/:id/:username',(req,res)=>{
//  const id = req.params.id;
//  const username = req.params.username;
//  res.render('index.ejs',{id: id, username: username})
// })
// app.get('/questions/:id/:titile',(req, res)=>{
//     const title = req.params.titile;
//     res.send('This route will handel questions. That is the title :'+title);
// })
// app.get('/users/:id/:username',(req,res)=>{
//     const username = req.params.username;
//     res.send('This route will handel users info :'+username)
// })
app.get('/',(req,res)=>{
    res.render('index');
});
app.listen(5000, (req,res)=>{
    console.log('Ejs app is running over 5000 port..')
})