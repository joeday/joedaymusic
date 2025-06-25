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
  {
    id: 1,
    date: new Date("08/02/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Bellingham, WA",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/oJ7TFuN9N2JWYCkLoh1M",
  },
  {
    id: 2,
    date: new Date("08/04/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Spokane, WA",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/sgOztXzewY7TGaaemQwZ",
  },
  {
    id: 3,
    date: new Date("08/05/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Boise, ID",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/GEoRo3X1sy7X9Pgk8rTr",
  },
  {
    id: 4,
    date: new Date("08/06/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Vancouver, WA",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/ZvehJT7WQ7Awdku3iJmA",
  },
  {
    id: 5,
    date: new Date("08/07/2025 6:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    location: "Salem, OR",
    otherBands: "John Van Deusen",
    onSale: true,
    onSaleStartDate: new Date("05/27/2022 10:00:00 AM").toLocaleDateString(
      "en-US",
      onSaleOptions
    ),
    ticketLink: "https://sidedooraccess.com/shows/1mMtwgtvjpI22zpDOrCO",
  },
  {
    id: 6,
    date: new Date("08/08/2025 6:00:00 PM").toLocaleDateString(
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
    ticketLink: "https://sidedooraccess.com/shows/ky3G4tfhl0HoegXhROd9",
  },
];
