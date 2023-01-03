

useMemo 为render中 执行， dom更新之前， 所以应该不会 造成render,
useMemo对函数返回结果进行缓存，即使页面没有用到，也会在首次渲染或依赖更新后组件函数执行时重新执行，组件函数执行，先useMemo再更新页面



#### ref.current不能作为其他hooks的依赖项
ref.current的值的产生变更并不会造成re-render, Reactjs并不会跟踪ref.current的变动