function myBind(func, context, ...argsOuter) {
  return function(...argsInner) {
    args = argsOuter.concat(argsInner);
    return func.apply(context, args);
  }
}
