import FormLogin from "./components/Fragments/FormLogin";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex justify-center bg-white w-1/3 items-center">
          <FormLogin />
        </div>
        <div className="flex justify-center bg-blue-600 w-2/3 items-center">
          <p className="text-white">Blue section content here!</p>
        </div>
      </div>
    </>
  );
}

export default App;
