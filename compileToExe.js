const { compile } = require('nexe')
const  copydir  = require('copy-dir');

const publicFilePath = './public/';
const destination = './dist/'

console.log('start compile')


compile({
    input: './index.js',
    output: `${destination}coolApp`,
    //resources: `${publicFilePath}**/*` //This wil compile the assets into the exe file then the copy dir is not needed
}).then(() => {
    //when you compile the resources in the exe you dont need to copy them
    copydir(publicFilePath, `${destination}/public`, e => console.log('copy done', e));
    console.log('success')
    
}).catch((e) =>{
    console.log('Something is wrong :O :', e)
})