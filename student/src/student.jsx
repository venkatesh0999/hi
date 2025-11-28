import React, { useState } from "react";

export default function StudentPagination() {
  const students = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Student ${i + 1}`
  }));

  const pageSize = 10;
  const totalPages = Math.ceil(students.length / pageSize);

  const [currentPage, setCurrentPage] = useState(1);

  const start = (currentPage - 1) * pageSize;
  const currentStudents = students.slice(start, start + pageSize);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <h2>Student List (Page {currentPage})</h2>

      <ul>
        {currentStudents.map((s) => (
          <li key={s.id}>
            {s.id}. {s.name}
          </li>
        ))}
      </ul>

      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>

      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>

      <p>Total Pages: {totalPages}</p>
    </div>
  );
}
