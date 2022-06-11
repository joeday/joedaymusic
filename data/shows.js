const options = { month: "short", day: "numeric" };
const onSaleOptions = {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

export default [
  {
    id: 0,
    date: new Date("06/24/2022 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Redmond, WA",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/yzMNl0jve1Y6fa0q94wc",
  },
  // {
  //   id: 1,
  //   date: new Date("07/22/2022 7:00:00 PM").toLocaleDateString(
  //     "en-US",
  //     options
  //   ),
  //   location: "Leavenworth, WA",
  //   otherBands: "John Van Deusen",
  //   onSale: true,
  //   onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
  //     "en-US",
  //     onSaleOptions
  //   ),
  //   ticketLink: "https://sidedooraccess.com/shows/BHvSDZopoKUvf3OsAM72",
  // },
];
