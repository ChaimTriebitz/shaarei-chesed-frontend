import React from "react";

const ProjectOverview = () => {
  return (
    <section className="project-overview">
      <h3 className="title">Investment Opportunity</h3>
      <div className="content">
        <p>
          We are in the final stages of acquiring a prime plot in Shaarei
          Chesed, and we&apos;re inviting one or two investors to join us in
          completing the acquisition.
        </p>

        <p>
          As a buyer, your funds are fully protected: you will hold title to the
          land and make direct payments to the contractor during the
          construction process.
        </p>

        <div className="card">
          <h4>Investment Details</h4>
          <div className="card-details">
            <div className="item">
              <span>Cost per sqm:</span>
              <h6>57,000 NIS</h6>
            </div>
            <div className="item">
              <span>Cost per sq. ft:</span>
              <h6>$1,900</h6>
            </div>
            <div className="item">
              <span>Total per apartment:</span>
              <h6>12 million NIS</h6>
            </div>
          </div>
        </div>

        <p>
          This investment includes full customization options and excellent
          long-term investment potential.
        </p>
      </div>
    </section>
  );
};

export default ProjectOverview;
