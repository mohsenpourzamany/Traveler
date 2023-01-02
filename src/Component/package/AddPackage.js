import React from "react";

const AddPackage = () => {
  return (
    <form className="row g-3 addpackage">
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          Country
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          Days
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          Number of Person
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          Describe
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
      <div className="col-md-4">
        <label for="validationServer01" className="form-label">
          Price
        </label>
        <input
          type="text"
          className="form-control is-valid"
          id="validationServer01"
          value="Mark"
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>

      <div className="col-md-8 ">
        <label for="validationServer01" className="form-label">
          Photo
        </label>
        <input
          type="file"
          class="form-control"
          aria-label="file example"
          required
        />
        <div className="invalid-feedback">
          Example invalid form file feedback
        </div>
      </div>

      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck3"
            aria-describedby="invalidCheck3Feedback"
            required
          />
          <label className="form-check-label" for="invalidCheck3">
            Agree to terms and conditions
          </label>
          <div id="invalidCheck3Feedback" className="invalid-feedback">
            You must agree before submitting.
          </div>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Submit Package
        </button>
      </div>
    </form>
  );
};

export default AddPackage;
