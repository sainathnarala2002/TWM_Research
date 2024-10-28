import React, { useState } from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [user, setUser] = useState({
    fullName: '',
    mobile: '',
    email: '',
    language: '',
    state: '',
    segment: '',
    investment: '',
  });

  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    const mobileRegex = /^[0-9]{10}$/;

    if (!user.fullName) {
      errors.fullName = 'Full Name is required.';
    }

    if (!user.mobile) {
      errors.mobile = 'Mobile Number is required.';
    } else if (!mobileRegex.test(user.mobile)) {
      errors.mobile = 'Mobile Number must be 10 digits.';
    }

    if (!user.email) {
      errors.email = 'Email is required.';
    }

    ['language', 'state', 'segment', 'investment'].forEach((field) => {
      if (!user[field]) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      }
    });

    setErrorMessages(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Registered user:', user);
    setSuccessMessage('Registration successful!');
    setUser({
      fullName: '',
      mobile: '',
      email: '',
      language: '',
      state: '',
      segment: '',
      investment: '',
    });
    setErrorMessages({});
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  return (
      <div className="container-fluid text-white shadow rounded pb-1">
        <div className="card m-5 p-4">
        <div className="row d-flex justify-content-center">
          {/* Left Column - 6 */}
          <div className="col-md-6 col-lg-6 p-4 mt-4 mb-2 rounded">
            <div className="h5 text-warning">License Holder’s Name – RISHABH KUMAR SHARMA SEBI Registration No. – INH000018081</div>
            <div className="alert alert-warning mt-5">
              <strong>Attention Investors!</strong>
              <ul>
                <li>Investment in securities markets is subject to market risk; we do not offer any guaranteed profit services.</li>
                <li>Before taking expert advice or any services with TWM Research Alert, clients should read the disclaimer, terms and conditions, disclosure, and refund policy of the company.</li>
                <li>We do not accept advisory fees in any personal or individual bank account; any payment made should be in favor of TWM Research Alert.</li>
                <li>All trades will be exclusively based on specific advice from TWM Research Alert; clients should not take advice from anyone else.</li>
                <li>Risk of loss in trading and investment can be substantial and can even wipe out the complete capital at stake.</li>
                <li>Investment in securities markets is subject to market risks; you are requested to carefully consider whether trading/investment is appropriate for you based on your experience, objectives, financial resources, and other relevant circumstances.</li>
                <li>TWM Research Alert Platform attempts to provide the best suitable research and trading ideas based on technical and derivative analysis.</li>
                <li>One should trade according to personal risk appetite and with strict stop-losses.</li>
                <li>TWM Research Alert and any of its employees shall not be liable for losses, if any, incurred by you.</li>
              </ul>
            </div>
          </div>
          {/* Right Column - 4 */}
          <div className="col-md-6 col-lg-6 p-4 rounded">
            <form onSubmit={handleSubmit}>
              <div className="h2 text-center">TWM RESEARCH</div>
              {successMessage && <div className="alert alert-success">{successMessage}</div>}

              <label htmlFor="fullName" className="form-label">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="form-control mb-3"
                value={user.fullName}
                onChange={handleChange}
                required
              />
              {errorMessages.fullName && <div className="text-danger">{errorMessages.fullName}</div>}

              <label htmlFor="mobile" className="form-label">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="form-control mb-3"
                value={user.mobile}
                onChange={handleChange}
                required
              />
              {errorMessages.mobile && <div className="text-danger">{errorMessages.mobile}</div>}

              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control mb-3"
                value={user.email}
                onChange={handleChange}
                required
              />
              {errorMessages.email && <div className="text-danger">{errorMessages.email}</div>}

              <label htmlFor="language" className="form-label">Language</label>
              <select
                name="language"
                className="form-select mb-3"
                value={user.language}
                onChange={handleChange}
              >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="mr">Marathi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              {errorMessages.language && <div className="text-danger">{errorMessages.language}</div>}

              <label htmlFor="state" className="form-label">State</label>
              <select
                name="state"
                className="form-select mb-3"
                value={user.state}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="MH">Maharashtra</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="GA">Goa</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="KA">Karnataka</option>
              </select>
              {errorMessages.state && <div className="text-danger">{errorMessages.state}</div>}

              <label htmlFor="segment" className="form-label">Segment</label>
              <select
                name="segment"
                className="form-select mb-3"
                value={user.segment}
                onChange={handleChange}
              >
                <option value="">Select Segment</option>
                <option value="equity">Equity Cash/Intraday</option>
                <option value="option">{'Option (Call/Put)'}</option>
                <option value="future">{'Future (Derivatives)'}</option>
                <option value="commodity">Commodity</option>
              </select>
              {errorMessages.segment && <div className="text-danger">{errorMessages.segment}</div>}

              <label htmlFor="investment" className="form-label">Investment</label>
              <select
                name="investment"
                className="form-select mb-3"
                value={user.investment}
                onChange={handleChange}
              >
                <option value="">Select Investment</option>
                <option value="50k">Above Rs 50000</option>
                <option value="l00k">Above Rs 1 Lakh</option>
                <option value="200k">Above Rs 2 Lakh</option>
                <option value="300k">Above Rs 3 Lakh</option>
              </select>
              {errorMessages.investment && <div className="text-danger">{errorMessages.investment}</div>}

              <div className="mt-3 d-grid gap-1">
                <button type="submit" className="btn btn-success">Register</button>
              </div>
            </form>
          </div>
        </div>

        </div>
        <footer className="text-center mt-4">
          <p> <a href="http://www.twmresearchalert.com"> twmresearchalert.com </a> © Copyright 2024. All rights reserved.</p>
        </footer>
      </div>
  );
};

export default LandingPage;
