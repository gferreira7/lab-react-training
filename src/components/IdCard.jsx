function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="d-flex w-50 border mb-2">
      <div className="p-2">
        <img src={picture} alt="id" className="h-100" />
      </div>
      <div className="d-flex flex-column p-2  align-items-start">
        <span>First name: {firstName}</span>
        <span>Last name: {lastName}</span>
        <span>Gender: {gender}</span>
        <span>Height: {height}</span>
        <span>Birth: {birth.getDate()}</span>
      </div>
    </div>
  );
}

export default IdCard;
