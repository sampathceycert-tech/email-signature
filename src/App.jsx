import SignatureForm from "./components/SignatureForm";
import SignaturePreview from "./components/SignaturePreview";
import "./styles/EmailSignature.css";


function App() {

  return (
    <div className="wrapper">

      <SignatureForm />

      <SignaturePreview />

    </div>
  );

}

export default App;