import React, { useState } from "react";
import Home from "./src/screens/home.js";
import AddNote from "./src/screens/addNote.js";
import EditNote from "./src/screens/editNote.js";

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
}) => {
  switch (currentPage) {
    case "home":
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
    case "add":
      // Berikan function "addNote" ke component "AddNote"
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          noteList={noteList}
          editNote={editNote}
        />
      );
    default:
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ]);

  const addNote = ({title, desc}) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = ({id, updatedTitle, updatedDesc}) => {
    setNoteList(
      noteList.map((note) =>
        note.id === id
          ? {
              ...note,
              title: updatedTitle,
              desc: updatedDesc,
            }
          : note
      )
    );
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
    />
  );
};

export default App;
