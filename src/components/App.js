import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
console.log(notes);

// function createNotes(noteItem) {
//   return (
//     <Note
//       key={noteItem.key}
//       title={noteItem.title}
//       content={noteItem.content}
//     />
//   );
// }

function App() {
  return (
    <div>
      <Header />
      {/* {notes.map(createNotes)} */}
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}

      {/* <Note title="This is the note title" content="This is the note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
