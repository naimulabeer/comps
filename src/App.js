import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "aga",
      label: "Can I use React on a project",
      content: "You can use React on any project you want",
    },
    {
      id: "aasg",
      label: "Can I use JavaScript on a project",
      content: "You can use JavaScript on any project you want",
    },
    {
      id: "babas",
      label: "Can I use HTML or CSS on a project",
      content: "You can use HTML or CSS on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
