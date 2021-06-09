const mongoose = require('mongoose');

mongoose.Promisse = global.Promisse

let user = ''
let psw = 'BZK4mBm1gpSJxvUTxyz'
let cluster = 'labsystem'

let url = 'mongodb+srv://'+ user +':'+ psw +'@cluster0.lplyi.mongodb.net/' + cluster

const con = mongoose.createConnection(url, {useNewUrlParser: true, useUnifiedTopology: true});

const Usu = con.model('usuarios', { name: String, psw: String });
const ObjUsu = con.model('usuarios');

// CREATE DOCUMENT
// Usu.create({
//         name: "Spiderman",
//         psw: "mudar123"
//     }).then(async(res)=>{
//     await con.close()
// })

// READ DOCUMENTS
// ObjUsu.find({}).then( async (res)=>{
//     console.log(res)
//     await con.close()
// })

// UPDATE DOCUMENTS
// ObjUsu.updateOne( { name: 'Bárbara' }, { name: 'Octopus' }).then( async(res)=>{
//     await con.close()
// })
    
// DELETE DOCUMENTS
// ObjUsu.deleteOne( { psw: '123x' }).then( async (res)=>{
//     await con.close()
// })