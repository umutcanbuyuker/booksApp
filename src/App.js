import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BookList from "./components/BookList"
import BookRecyled from "./components/BookRecyled"
import BookFirstHand from "./components/BookFirstHand"
import BookCreate from "./components/BookCreate"
import BookUpdate from "./components/BookUpdate"
import BookTable from "./components/BookTable";

function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/book/recyled" element={<BookRecyled />}>
            {/* <Route path=":recyled" element={<BookRecyled />} /> */}
          </Route>
          <Route path="/book/firsthand" element={<BookFirstHand />} />
          <Route path="/book/all" element={<BookList />} />
          <Route path="/book/create" element={<BookCreate />} />
          <Route path="/book/update/:id" element={<BookUpdate />} />
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
