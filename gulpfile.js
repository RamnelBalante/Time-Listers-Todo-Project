//  Node  Runtime Runs on a compter
//  Common.js Node Backend JS API work with server side
//  require()
// ES Modules import Browser JS Framework or Vanilla.js
// export export default
const {src,dest, series} = require('gulp')


const static = function(){
    return  src('src/static/data/*.*').pipe(dest('dist/data'))
}

function redirect(){
    return (src('./_redirects').pipe(dest('./dist')))
}


exports.default = series(static, redirect)
 