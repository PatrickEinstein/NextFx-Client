type Props = {
  name?: string;
  image?: string;
  period?: string;
  party?: string;
  country?: string;
  impact?: string;
  Actual?: string;
  forcast?: string;
  previous?: string;
  currencyCode?: string;
  consensus?: string;
};

export const CalendarBox = ({
  name,
  image,
  period,
  party,
  country,
  impact,
  Actual,
  forcast,
  previous,
  currencyCode,
  consensus,
}: Props) => {
  const timeTo = new Date(period!);
  return (
    <div className="flex">
      <div className="rounded-full">
        <img src={image} alt="image" className="object-fill" />
      </div>
      <div className="flex text-yellow-500">
        <h3>{name}</h3>
        <h3>{timeTo.toLocaleString()}</h3>
        <h3>{country}</h3>
        <h3>{currencyCode}</h3>
        <h3>{impact}</h3>
        <h3>{Actual}</h3>
        <h3>{forcast}</h3>
        <h3>{previous}</h3>
        <h3>{consensus}</h3>
      </div>
    </div>
  );
};
