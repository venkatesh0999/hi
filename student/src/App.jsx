import { useState } from "react";
import "./App.css";
import StudentPagination from "./student.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-root">
      <main className="container">
        <h1 className="title">Student Records</h1>

        <StudentPagination />

        <div className="counter">
          <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        </div>
      </main>
    </div>
  );
}
