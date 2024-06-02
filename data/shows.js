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
    date: new Date("07/14/2024 3:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Victoria, BC",
    otherBands: "",
    onSale: true,
    onSaleStartDate: new Date("04/03/2024 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedoor.link/l/tkxROLXa27TRpPInJIHT",
  },
  {
    id: 1,
    date: new Date("08/23/2024 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Conway, WA",
    otherBands: "Golden Hart",
    onSale: true,
    onSaleStartDate: new Date("04/03/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink:
      "https://conwaymuse.com/event/joe-day-fri-aug-23-2024-8-pm-conway-muse/",
  },
  // {
  //   id: 2,
  //   date: new Date("08/11/2022 7:00:00 PM").toLocaleDateString(
  //     "en-US",
  //     options
  //   ),
  //   location: "Vancouver, WA",
  //   otherBands: "John Van Deusen",
  //   onSale: true,
  //   onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
  //     "en-US",
  //     onSaleOptions
  //   ),
  //   ticketLink: "https://sidedooraccess.com/shows/UdEylLEXv1AxPkIHy5zW",
  // },
  // {
  //   id: 3,
  //   date: new Date("08/12/2022 7:00:00 PM").toLocaleDateString(
  //     "en-US",
  //     options
  //   ),
  //   location: "Redmond, WA",
  //   otherBands: "John Van Deusen",
  //   onSale: true,
  //   onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
  //     "en-US",
  //     onSaleOptions
  //   ),
  //   ticketLink: "https://sidedooraccess.com/shows/yzMNl0jve1Y6fa0q94wc",
  // },
];
