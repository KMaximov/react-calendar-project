const baseUrl = 'https://627a4e1373bad50685866f2c.mockapi.io/api/v1/Calendar';

const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2022, 6, 6, 10, 15),
    dateTo: new Date(2022, 6, 6, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2022, 6, 16, 10, 15),
    dateTo: new Date(2022, 6, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2022, 6, 17, 10, 30),
    dateTo: new Date(2022, 6, 17, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2022, 6, 25, 10, 30),
    dateTo: new Date(2022, 6, 25, 11, 0),
  },
];

export default events;