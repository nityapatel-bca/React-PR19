import React, { useState } from 'react';

function StudentDelete() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Nitya', course: 'BCA' },
    { id: 2, name: 'Rahul', course: 'BBA' },
    { id: 3, name: 'Priya', course: 'B.Com' }
  ]);

  function deleteStudent(id) {
    setStudents(students.filter(student => student.id !== id));
  }

  return (
    <div>
      <h1>Student Management</h1>

      <h2>Student List</h2>

      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map(student => (
          <div key={student.id}>
            <p>
              ID: {student.id} | Name: {student.name} |
              Course: {student.course}{' '}
              <button onClick={() => deleteStudent(student.id)}>
                Delete
              </button>
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentDelete;