const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    `div`,
    null,
    //props used to pass things into components - html attributes in middle, content at end
    ce(`h1`, { style: { color: props.color } }, props.title)
  );
};

//MyFirstComponent is a reusable class
const MyFirstComponent = function() {
  //createElement creates an HTML element
  // Middle parameter can be used to pass in id
  return ce(
    `div`,
    { id: `my-first-component` },
    //You can pass arrays of components - important later!
    [
      ce(MyTitle, { title: 'Mad Men', color: 'YellowGreen' }),
      //Here title hooks into props.title and color goes into the style attribute
      ce(MyTitle, { title: 'Game of Thrones', color: 'GreenYellow' }),
      ce(MyTitle, { title: 'King of the Hill', color: 'LimeGreen' }),
      ce(MyTitle, { title: 'Futurama', color: 'Lime' })
    ]
  );
};
ReactDOM.render(
  //We can use createElement on components/classes we've made to render them
  ce(MyFirstComponent),
  document.getElementById(`app`)
);
