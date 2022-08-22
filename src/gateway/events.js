const baseUrl = 'https://627a4e1373bad50685866f2c.mockapi.io/api/v1/Calendar';

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then(res => {
      if(!res.ok) {
        throw new Error(`Internal Server Error. Can't display events`)
      }
      return res.json();
    })
}

export const createEvent = data => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(`Internal Server Error. Can't display events`)
      }
    })
}

export const deleteEvent = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if(!res.ok) {
        throw new Error(`Internal Server Error. Can't display events`)
      }
    })
};
