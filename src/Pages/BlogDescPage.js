import React from "react";
import { Link } from "react-router-dom";
import Author from "../Component/Author";
import BlogDesc from "../Component/BlogDesc";
import Booking from "../Component/Booking";
import CommentForm from "../Component/CommentForm";
import CommentList from "../Component/CommentList";
import ListPost from "../Component/ListPost";
import RecentPost from "../Component/RecentPost";
import SearchForm from "../Component/SearchForm";

const BlogDescPage = () => {
  return (
    <>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 className="display-4 text-white text-uppercase">Blog Detail</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <Link className="text-white" to="">
                  Home
                </Link>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Blog Detail</p>
            </div>
          </div>
        </div>
      </div>
      <Booking />
      <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-8">
            <BlogDesc />
            <CommentList />
            <CommentForm />
            </div>
            <div class="col-lg-4 mt-5 mt-lg-0">
              <Author />
              <SearchForm />
              <ListPost />
              <RecentPost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDescPage;
