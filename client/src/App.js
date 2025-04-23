
import './App.css';
import {BrowserRouter as Router, Routes,Route}from "react-router-dom"
import Layout from './comments/Layout';
import TasksList from './tasks/TasksList';
import PostList from './posts/PostsList';
import UserList from './users/UserList';
import AddTask from './tasks/AddTask';
import UpdateTask from './tasks/UpdateTask';
import AddPost from './posts/AddPost';
import UpdatePost from './posts/UpdatePost';
import AddUser from './users/AddUser';
import UpdateUser from './users/UpdateUser';
import GetById from './posts/GetById';
import GetByIdT from './tasks/GetByIdT';
import GetByIdU from './users/GetByIdU';


function App() {
  return (
    
    <div className="App">
    < Router>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index element={<TasksList/>} />
      <Route path='/tasks' element={<TasksList/>} />
      <Route path='/tasks/add' element={<AddTask/>} />
      <Route path='/posts' element={<PostList/>} />
      <Route path='/users' element={<UserList/>} />
      <Route path='/tasks/UpdateTask' element={<UpdateTask/>}/>
      <Route path='/posts/add' element={<AddPost/>}></Route>
      <Route path='/posts/update' element={<UpdatePost/>}></Route>
      <Route path='/users/add' element={<AddUser/>}></Route>
      <Route path='/users/update' element={<UpdateUser/>}></Route>
      <Route path='/posts/:id' element={<GetById/>}></Route>
      <Route path='/tasks/:id' element={<GetByIdT/>}></Route>
      <Route path='/users/:id' element={<GetByIdU/>}></Route>
      </Route>
    </Routes>
    </Router>
    </div>
      );
}

export default App;
