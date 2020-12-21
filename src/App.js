import React from "react";
import "./App.css";
import BookLighter from "./component/page/book-lighter";
import BookDetail from "./component/page/book-detail";
import Home from "./component/page/home";
import User from "./component/page/user";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  useParams,
  Redirect
} from "react-router-dom";
import Header from "./component/layout/header";
import Footer from "./component/layout/footer";
import BookCategory from "./component/page/category-book";
import Review from "./component/layout/review";
import ReviewDetail from "./component/page/review_detail";
import Admin from "./component/page/admin";
import AdminAddBook from "./component/page/admin-addbook";
import AdminBook from "./component/page/admin-book";
import SearchBook from "./component/page/searchbook";
import AdminSearch from "./component/page/admin-search";

function App() {
  // let { bookId } = useParams()
  const CheckAdmin = () => {
    if (localStorage.getItem("user-role") != 1) return false;
    else return true;
  }
  return (
    <>
      <div>
        <a className="scroll-top-arrow" href="javascript:void(0);">
          <i className="fa fa-angle-up" />
        </a>
        {/*LOADER*/}
        <div className="loader">
          <div className="loader-spinner" />
        </div>
      </div>
      {CheckAdmin() == true && <>
      
        <Switch>
          <Route exact path="/admin" render={() => <Admin />} />
          <Route exact path="/search?key=" render={() => <AdminSearch />} />
          <Route exact path="/admin/book/category/:categoryId" render={() => <AdminBook />} />
          <Route path="/admin/book/add" render={() => <AdminAddBook />} />
          <Redirect to="/admin"/>
        </Switch>
        
      </>}
      {CheckAdmin() == false && <>
        <Switch>
          <Route exact path="/" render={() => <><Header /><Home /></>} />
          <Route path="/user/:userID" render={() => <><Header /><User /></>} />
          <Route path="/category/:categoryId" render={() => <><Header /> <BookCategory categoryName="History" /></>} />
          <Route exact path="/book" render={() => <><Header /> <BookLighter /></>} />
          <Route exact path="/search" render={() => <><Header /> <SearchBook /></>} />
          <Route path="/book/:bookId" render={() => <><Header /><BookDetail /> </>} />
          <Route exact path="/review" render={() => <><Header /> <Review /> </>} />
          <Route path="/review/:reviewId" render={() => <><Header /> <ReviewDetail /> </>} />
          {/* <Route path="/admin/book-manage" render={() => <AdminBook /> } /> */}
        </Switch>
      </>}



      {/* <Footer /> */}
    </>

    //
  );
}

export default App;
