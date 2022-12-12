import React from "react";
import { Link } from "react-router-dom";
import Author from "../Component/Author";
import Blog from "../Component/Blog";
import Booking from "../Component/Booking";
import ListPost from "../Component/ListPost";
import RecentPost from "../Component/RecentPost";
import SearchForm from "../Component/SearchForm";

const BlogPage = () => {
  return (
    <>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 className="display-4 text-white text-uppercase">Blog</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <Link className="text-white" to="">
                  Home
                </Link>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Blog</p>
            </div>
          </div>
        </div>
      </div>
      <Booking />
      <div class="container-fluid py-5">
        <div class="container py-5">
          <div class="row">
          <div class="col-lg-8">
            <Blog />
            <Blog />
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

export default BlogPage;
