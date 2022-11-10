import { useState } from "react";
import { BrowserRouter, HashRouter, Route, Router, Routes } from "react-router-dom";
import { Api } from "./Components/Api";
import { FormBuilderFunction } from "./Components/FormBuilder";
import { Post } from "./Components/Post";
// import { Provider } from "./Components/FolderFormcontext";
import Dashboard from "./Components/Dashboard";
import { FolderForm } from "./Components/FolderForm";
import { Form } from "./Form";
import LoginForm from "./Login";
import { Parent } from "./Parent";
import { PracticForm } from "./PracticeForm";
import Table from "./Table";
import TabsComponent from "./Tabs";
import { Provider } from "./Components/context";
import { About } from "./Components/About";


export default function App() {
  return (
    <div className="App">
      <Provider>
      <HashRouter>
      <Routes>
        <Route path="/form" element={<Form/>}></Route>
        <Route path="/" exact element={<LoginForm/>}></Route>
        <Route path="/dashboard" exact element={<Dashboard/>}></Route>
        <Route path="/formBuilder" exact element={<FormBuilderFunction/>}></Route>
        <Route path="/post" exact element={<Post/>}></Route>
        <Route path="/about" exact element={<About/>}></Route>
        <Route path="/table" element={<Table/>}></Route>
        <Route path="/tabs" element={<TabsComponent/>}></Route>
        <Route path="/practiceForm" element={<PracticForm/>}></Route>
        <Route path="/parentChildData" element={<Parent/>}></Route>
        <Route path="/folderForm" element={<FolderForm/>}></Route>
        <Route path="/Api" element={<Api/>}></Route>
        </Routes>
      </HashRouter>
      </Provider>
     </div>
  );
}
