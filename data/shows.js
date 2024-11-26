const options = { month: "short", day: "2-digit" };
const onSaleOptions = {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

export default [
  {
    id: 0,
    date: new Date("02/13/2025 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Chop Suey, Seattle, WA",
    otherBands: "Joseph Pennell",
    onSale: false,
    onSaleStartDate: "tbd",
    ticketLink:
      "https://chopsuey.com/calendar/",
  },
  // {
  //   id: 1,
  //   date: new Date("09/05/2024 7:00:00 PM").toLocaleDateString(
  //     "en-US",
  //     options
  //   ),
  //   location: "Miller's, Carnation, WA",
  //   otherBands: "Debbie Miller",
  //   onSale: true,
  //   onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
  //     "en-US",
  //     onSaleOptions
  //   ),
  //   ticketLink:
  //     "https://millerscarnation.com/event/joe-day-and-the-coyotes-with-debbie-miller/",
  // },
  // {
  //   id: 2,
  //   date: new Date("10/12/2024 6:00:00 PM").toLocaleDateString(
  //     "en-US",
  //     options
  //   ),
  //   location: "Chop Suey, Seattle, WA",
  //   otherBands: "Joseph Pennell",
  //   onSale: true,
  //   onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
  //     "en-US",
  //     onSaleOptions
  //   ),
  //   ticketLink: "foo",
  // },
];
