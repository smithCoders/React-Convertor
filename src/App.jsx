// src/App.jsx
import STT from "./STT";
import TextToVoice from "./TTS";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="/tts" element={<TextToVoice />} />
        <Route path="/stt" element={<STT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
