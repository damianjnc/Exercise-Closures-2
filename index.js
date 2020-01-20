let view;

function initializeView() {
  let counter = 0;
  return function() {
    if (counter > 0) {
      return;
    } else {
      view = "view";
      counter++;
      console.log("view has been set");
    }
  };
}

const initializeOnce = initializeView();
initializeOnce()
initializeOnce()
console.log(view);
