const options = { month: "long", day: "2-digit", year: "numeric" };

export default [
  {
    id: "01",
    published: true,
    title: "Return My Heart To My Chest",
    guest: "Mike Cosper",
    releaseDate: new Date("08/06/2022 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    description:
      "Mike Cosper is an old friend and is the creator and host of the Rise and Fall of Mars Hill podcast. Mike & Joe talk through how Mike chose to use Return My Heart To My Chest for episode V of the podcast.",
    image: "/images/spotify-portrait-2022.png",
    links: [
      {
        name: "Apple",
        url: "https://foo.bar",
      },
      {
        name: "Spotify",
        url: "https://foo.bar",
      },
      {
        name: "Castro",
        url: "https://foo.bar",
      },
      {
        name: "Android",
        url: "https://foo.bar",
      },
      {
        name: "Stitchr",
        url: "https://foo.bar",
      },
    ],
  },
  {
    id: "02",
    published: true,
    title: "Halflight",
    guest: "Levi the Poet",
    releaseDate: new Date("08/13/2022 7:00:00 PM").toLocaleDateString(
      "en-US",
      options
    ),
    description:
      "Levi the Poet is one of a kind. You won't find someone else doing what he does. Joe & Levi talk through faith crisis, fighting the urge for certainty by embracing mystery, and wolves howling in the wilderness.",
    image: "/images/spotify-portrait-2022.png",
    links: [
      {
        name: "Apple",
        url: "https://foo.bar",
      },
      {
        name: "Spotify",
        url: "https://foo.bar",
      },
      {
        name: "Castro",
        url: "https://foo.bar",
      },
      {
        name: "Android",
        url: "https://foo.bar",
      },
      {
        name: "Stitchr",
        url: "https://foo.bar",
      },
    ],
  },
];
