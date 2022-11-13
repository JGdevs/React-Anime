'use strict';

const express = require('express'),

mongoose = require('mongoose'),

bodyParser = require('body-parser'),

//publicDir = express.static(`${__dirname}/public`),

port = (process.env.PORT || 4069),

fs = require('fs'),

//conectandose con mongo
	
conf = {

	host:'localhost',
	db:'ranime'

},

Schema = mongoose.Schema,

AnimeSchema = new Schema ({

	source:'array',
	title:'string',
	type:'string',
	status:'string',
	episodes:'number',
	animeSeason:'object',
	picture:'string',
	thumbnail:'string',
	synonyms:'array',
	relations:'array',
	rating:'number',
	tags:'array'

},{colletion:'animes'}),

VideoSchema = new Schema ({

	title:'string',
	description:'string',
	picture:'string',
	episodes:'array',
	numEpisodes:'number',
	tags:'array',
	status:'string',
	releaseYear:'string',
	type:'string',
	id:'number'


},{colletion:'video'}),

conn = mongoose.model('animes',AnimeSchema),

videoConn = mongoose.model('video',VideoSchema);

mongoose.connect(`mongodb:\/\/${conf.host}/${conf.db}`);

//fin conexion mongo

const app = express();

//configurando app

app.set('port',port);

// ejecutando middlewares

//parse application/json

//parse application/x-www-form-urlencoded

//app.use(publicDir);

app.use(bodyParser.json({limit:'50mb'}));

app.use(bodyParser.urlencoded({extended:false,limit:'50mb'}));

app.use((req,res,next) => {

	res.header({'Access-Control-Allow-Origin': '*'});

	res.header({'Access-Control-Allow-Headers': '*'});

	if(req.method === 'OPTIONS') res.sendStatus(200);
	else next();

})

app.get('/estrenos/:n',(req,res,next) => {

	let {n} = req.params;

	conn.find({status:'ONGOING'},{title:1,picture:1,_id:1,rating:1}).skip(n).limit(15).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(docs));

	});

});

app.get('/clasicos/:n',(req,res,next) => {

	let {n} = req.params;

	console.log(n);

	conn.find({'animeSeason.year':{$lte:2000}},{title:1,picture:1,_id:1,rating:1}).skip(n).limit(15).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(docs));

	});

});

app.get('/hentai/:n',(req,res,next) => {

	let {n} = req.params;

	conn.find({tags:'hentai'},{title:1,picture:1,_id:1,rating:1}).skip(n).limit(15).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(docs));

	});

});

app.get('/populares/:n',(req,res,next) => {

	let {n} = req.params;

	n = parseInt(n);

	conn.find().sort({rating:-1,_id:1}).skip(n).limit(15).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(docs));

	});

});

app.get('/generos/:genero/:n',(req,res,next) => {

	let {genero,n} = req.params;

	conn.find({tags:genero},{title:1,picture:1,_id:1,rating:1}).limit(15).skip(n).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});

		res.end(JSON.stringify(docs));

	});

});

app.get('/peliculas/:n',(req,res,next) => {

	let {n} = req.params;

	conn.find({type:'MOVIE'},{title:1,picture:1,_id:1,rating:1}).skip(n).limit(15).exec((err,docs) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(docs));

	});

});

app.get('/serie/:id',(req,res,next) => {

	let {id} = req.params;

	conn.findOne({_id:id}).exec((err,doc) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(doc));

	});

});

app.get('/video/:id',(req,res,next) => {

	let {id} = req.params;

	videoConn.findOne({id:id}).exec((err,doc) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});	

		res.end(JSON.stringify(doc));		

	});

});

app.get('/image/:name',(req,res,next) => {

	let {name} = req.params;

	fs.readFile(`./public/miniaturas/${name}`,(err,img) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/urlencoded'});

		res.end(img);		

	});

});

app.get('/caps/:folder/:numCap',(req,res,next) => {

	let {folder,numCap} = req.params;

	fs.readFile(`./public/animes/${folder}/${numCap}.mp4`,(err,cap) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/urlencoded'});

		res.end(cap);		

	});

});


app.get('/search/:text',(req,res,next) => {

	let {text} = req.params;

	conn.find({$text:{$search:`\"${text}\"`}}).exec((err,result) => {

		if (err) throw err;

		res.writeHead(200,{'content-type':'application/json'});

		res.end(JSON.stringify(result));				

	});

});

app.listen(app.get('port'),() => {

	console.log(`Iniciando express en el puerto ${app.get('port')}`);

});

module.exports = app;


