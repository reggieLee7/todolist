const path = require('path');


module.exports = {
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    devtool: 'eval-source-map',
    // module:{
    //     rules:[{
    //         test://
    //     }]
    // }
}