import React from "react";
import "./PanchayatHome.css"

export default function PanchyatHome() {
  return (
    <>
      <nav class="panchayat-nav navbar">
        <div class="panchayat-nav-container container">
          <a class="navbar-brand" href="/panchayathome">
            Home
          </a>
          <a class="nav-link" href="/panchayatadd">
            Add
          </a>
          <a class="nav-link" href="/panchayatview">
            View And Action
          </a>
          <a class="nav-link" href="/">
            Logout
          </a>
        </div>
      </nav>

      <div class="panchayat-admin-container container mt-4">
        <div class="row">
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="panchayat-card card">
              <div class="card-body text-center">
                <i class="fas fa-plus-circle fa-5x mb-3"></i>
                <h5 class="panchayat-card-title card-title"><a href="/panchayatadd"></a>Add</h5>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="panchayat-card card">
              <div class="card-body text-center">
                <i class="fas fa-eye fa-5x mb-3"></i>
                <h5 class="panchayat-card-title card-title">View And Action</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
