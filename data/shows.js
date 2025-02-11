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
    location: "Seattle, WA",
    otherBands: "Joseph Pennell, Shay Carlucci",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink:
      "https://www.ticketweb.com/event/joseph-pennell-joe-day-shay-chop-suey-tickets/14057693?REFID=ARTIST",
  },
  {
    id: 1,
    date: new Date("03/28/2025 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Carnation, WA",
    otherBands: "Mike Antone",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink:
      "https://millerscarnation.com/event/joe-day-and-the-coyotes-with-mike-antone/",
  },
  {
    id: 2,
    date: new Date("07/11/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Conway, WA",
    otherBands: "TBD",
    onSale: false,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "foo",
  },
];
