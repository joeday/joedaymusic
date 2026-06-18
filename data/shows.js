const options = { month: "short", day: "2-digit" };
const onSaleOptions = {
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

export default [
  {
    date: new Date("08/07/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Mount Vernon, WA",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink: "https://app.tickettailor.com/events/joedaymusic/2054888",
  },
  {
    date: new Date("09/19/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Conway, WA",
    otherBands: "Pretty Broken Things",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink:
      "https://arcadianpublichouse.com/events-1/ola/services/9-19-2026-joe-day-the-coyotes-pretty-broken-things-at-8-pm-arcadian-public-house",
  },
];
