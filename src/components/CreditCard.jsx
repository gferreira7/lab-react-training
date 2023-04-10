const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const ccCompany =
    type === 'Visa'
      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png'
      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png';

  return (
    <div
      style={{ 'background-color': `${bgColor}`, 'border-radius': '10px', "color": `${color}`, "width": "300px", "height": "200px"}}
      className="d-flex flex-column justify-content-evenly w-50 border p-2 mb-2"
    >
      <div className="row justify-content-center align-self-end p-2">
        <img
          style={{ height: '30px', 'object-fit': 'contain' }}
          src={ccCompany}
          alt="credit-card-provider"
        />
      </div>
      <div className="row justify-content-center fs-1">
        <p> •••• •••• •••• {number.slice(12)}</p>
      </div>
      <div className="row justify-content-start  ps-4">
        Expires {`${expirationMonth}`.padStart(2, '0')}/
        {`${expirationYear}`.slice(2)} {bank}<br /> {owner}
      </div>
    </div>
  );
};

export default CreditCard;
