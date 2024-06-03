
技术栈: uniapp + vue 3 + ts + vuex + sass

#### UNI APP 开发指南
1. image 组件直接用，封装要多层，而且记得传递class 进去
2. uniapp template 根节点很奇怪，小程序上会多一个本名节点，而网络端不会多一个本名节点
3. uni.request.config 里面不能加 responseType: 'JSON'
4. 微信小程序里面，对于 数据的更新，不能超过 1024kb，否则会报错，所以，不能渲染大数据