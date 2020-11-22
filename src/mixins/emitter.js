// 借用elementui的代码
function broadcast(componentName, eventName, params) {
  this.$children.forEach(child => {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName; // componentName 时elementui中自定义的key，这里可以改成自己定义的key或者直接用组件中的name
      // var name = parent.$options.name; // componentName 时elementui中自定义的key，这里可以改成自己定义的key或者直接用组件中的name
      
      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;
        
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast(componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params);
    }
  }
};