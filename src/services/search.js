export function getLists(value) {
  /* return fetch('/api/getLists?value=' + value)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    }) */
  
  return fetch('/api/getListsAsync?value='+value)
    .then(res => res.json())
    .catch(err => {
      console.log(err)
    })
}