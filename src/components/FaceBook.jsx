import { useState } from 'react';
import profiles from '../data/berlin.json';

const Facebook = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const [btnClicked, setBtnClicked] = useState('');
  const [filteredProfiles, setFilteredProfiles] = useState(profiles);
  const filteredCountries = profiles.map((profile) => profile.country);

  let countryOptions = Array.from(new Set(filteredCountries));

  const handleProfileClick = () => {
    setProfileClicked(!profileClicked);
  };
  const filterProfiles = (country) => {
    setBtnClicked(country)
    const newProfilesList = [...profiles].filter(
      (profile) => profile.country === country
    );
    setFilteredProfiles(newProfilesList);
  };

  const resetProfileFilter = () => {
    setFilteredProfiles(profiles);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-50 p-2 ">
      <div>
        <button className="btn btn-light" onClick={resetProfileFilter}>
          All
        </button>
        {countryOptions.slice(0,4).map((country) => {
          return (
            <button
              className={btnClicked === country ? `btn btn-dark`:`btn btn-light`}
              onClick={() => filterProfiles(country)}
            >
              {country}
            </button>
          );
        })}
        <button className="btn btn-light" onClick={resetProfileFilter}>
          ...
        </button>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        {filteredProfiles.map((profile) => (
          <div
            className="d-flex w-50 border p-2 m-2"
            style={{ height: '200px' }}
          >
            <img
              onClick={handleProfileClick}
              className=" object-contain"
              src={profile.img}
              alt="profile"
            />
            {profileClicked && (
              <div className="fs-5 ms-2" style={{ 'text-align': 'left' }}>
                <p>
                  <span className="fw-bold">First Name:</span>{' '}
                  {profile.firstName}
                </p>
                <p>
                  <span className="fw-bold">Last Name:</span> {profile.lastName}
                </p>
                <p>
                  <span className="fw-bold">Country:</span> {profile.country}
                </p>
                <p>
                  <span className="fw-bold">Type:</span>{' '}
                  {profile.isStudent ? 'Student' : 'Teacher'}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facebook;
