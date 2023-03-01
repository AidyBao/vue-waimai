
module.exports = {
    // transpileDependencies: true,
    // lintOnSave: false, //关闭eslint校验
    plugins: [
        require('postcss-pxtorem')({
            rootValue: 37.5,//代表1rem= 37.5px,比如页面宽750px,最终页面会换算成20rem
            propList:['*'],//需要转换的css属性，*就是所有属性都要转换
            exclude:/node-modules/i,//这里表示不处理node-modules文件夹下的内容
        })
    ]
}
