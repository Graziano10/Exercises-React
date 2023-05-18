import FilteredList from "./FilteredList";

const App = () => {

  const obj = [
    { name: 'Luca', id: 1, age: 30 },
    { name: 'Jhon', id: 2, age: 17 },
    { name: 'Joe', id: 3, age: 16 },
    { name: 'Liam', id: 4, age: 42 },
    { name: 'Seth', id: 5, age: 20 },
  ];

  return (
    <>
      <FilteredList list={obj}/>
    </>
  );
};

export default App;
