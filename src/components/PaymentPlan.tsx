import React from "react";

const PaymentPlan = () => {
  return (
    <section className="section payment-plan">
      <h3>Payment Plan</h3>

      <div className="content">
        <div className="timeline">
          <div className="timeline-item">
            <div className="time-marker">
              <span className="marker">1</span>
              <span className="time">Upon signing</span>
            </div>
            <div className="details">
              <h4>Initial Payment</h4>
              <div className="amount">1 million NIS</div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="time-marker">
              <span className="marker">2</span>
              <span className="time">In 6 months</span>
            </div>
            <div className="details">
              <h4>Land Acquisition</h4>
              <div className="amount">4 million NIS</div>
              <div className="note">
                Mortgage financing available for up to 50% of this amount
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="time-marker">
              <span className="marker">3</span>
              <span className="time">In 12 months</span>
            </div>
            <div className="details">
              <h4>Start of Construction</h4>
              <div className="amount">7 million NIS</div>
              <div className="note">
                Incremental payments totaling 7 million NIS
                <br />
                Mortgage financing available for up to 50% of this amount
              </div>
            </div>
          </div>

          <div className="timeline-item completion">
            <div className="time-marker">
              <span className="marker">✓</span>
              <span className="time">Project Completion</span>
            </div>
            <div className="details">
              <h4>Estimated Timeline</h4>
              <div className="note">3 years from contract signing</div>
            </div>
          </div>
        </div>

        <div className="total-investment">
          <h4>Total Investment</h4>
          <div className="amount">12 million NIS</div>
        </div>
      </div>
    </section>
  );
};

export default PaymentPlan;
