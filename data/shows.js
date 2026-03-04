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
    date: new Date("03/27/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Federal Way, WA",
    otherBands: "",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink:
      "https://www.eventbrite.com/e/porchlight-presents-joe-day-federal-way-wa-tickets-1984397257616",
  },
  {
    id: 1,
    date: new Date("04/10/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Carnation, WA",
    otherBands: "",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink:
      "https://millerscarnation.com/event/jackson-emmer-with-joe-day/",
  },
  {
    id: 2,
    date: new Date("08/07/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Mount Vernon, WA",
    otherBands: "",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink: "https://app.tickettailor.com/events/joedaymusic/2054888",
  },
  {
    id: 3,
    date: new Date("09/19/2026 7:00:00 PM").toLocaleDateString(
      "en-US",
      options,
    ),
    location: "Conway, WA",
    otherBands: "",
    onSale: false,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions,
    ),
    ticketLink: "",
  },
];
