const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}

export default [
  {
    id: 0,
    date: new Date('12/18/2021 5:30:00 PM').toLocaleDateString("en-US", options),
    location: 'Chateau Lill, Woodinville, WA',
    otherBands: 'Tim Wilson',
    onSale: false,
    onSaleStartDate: '',
    ticketLink: 'https://www.eventbrite.com/e/221096113427'
  },
  {
    id: 1,
    date: new Date('12/18/2021 8:00:00 PM').toLocaleDateString("en-US", options),
    location: 'Chateau Lill, Woodinville, WA',
    otherBands: 'Tim Wilson',
    onSale: false,
    onSaleStartDate: '',
    ticketLink: 'https://www.eventbrite.com/e/224316064387'
  }
]