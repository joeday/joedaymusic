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
    date: new Date("07/11/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Conway, WA",
    otherBands: "hernamewasprincess",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink:
      "https://arcadianpublichouse.com/events-1/ola/services/07-11-25-joe-day-and-the-coyotes",
  },
];
