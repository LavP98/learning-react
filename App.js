const doc = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'Hello World One'),
    React.createElement('h1', {}, 'Hello World two'),
  ])
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(doc);
