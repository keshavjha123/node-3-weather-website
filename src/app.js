const express=require('express');
const path=require('path');
const hbs=require('hbs');
const geocode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const  {request} = require('http');

const publicstatic_path=path.join(__dirname,'../public');

const viewPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');
const app=express();
const port=process.env.PORT||3000 ;

app.use(express.static(publicstatic_path));
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Keshav Jha'
    });
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About',
        name:'Keshav Jha'
    })
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'Keshav Jha'
    })
})









// app.get('/help',(req,res)=>{
//     res.send({
//         name:'keshav',
//         age:23
//     });
// })

// app.get('/about',(req,res)=>{
//     res.send('about page');
// })

app.get('/weather',(req,res)=>{
    if (!req.query.address) {
        return res.send({
            error:'you must add an address to search the element'
        })
    }
    const address=req.query.address;
    geocode(address,(error,data={})=>{
        // console.log('Error',error);
        // console.log('Data',data);
        if(error){
            return res.send({
                error:'The location could not be found'
            });
        }
        forecast(data.latitude,data.longitude,(error,forecastData)=>{
            if (error) {
                return res.send({
                    error:'The location could not be found'
                });
            }
            return res.send({
                location:data.location,
                forecast:forecastData,
                address:address
            })
            // console.log('Location:',data.location);
            // console.log('Data:',forecastData);
        })
    })


    // res.send({
    //     address:req.query.address
    // });
})

app.get('/products',(req,res)=>{

    if (!req.query.search) {
        return res.send({
            error:'You must provide a search term'
        })
    }
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        name:'Keshav',
        title:'404',
        errormessage:'Help page not found'
    });
})
app.get('*',(req,res)=>{
    res.render('404',{
        name:'Keshav',
        title:'404',
        errormessage:'The link not found'
    });
})

app.listen(port,()=>{
    console.log('Server is up and running on'+port);
})