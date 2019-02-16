1. question on what is JSX ? What is JSX compared with other template ?

2. shouldComponentUpdate ?
  Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props.
  The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default
  behavior.

3.Outer Component and Inner Component, how to pursure the Inner componnet HTML from Outer component ?
4.

function birthdayOrNot(){
  let a = (new Date() + '<br>').slice(4,10)
  let birthday = 'Apr 01'
  if (a === birthday){
   return true
  } else {
    return false
  }
}
