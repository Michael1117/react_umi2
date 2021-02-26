export default {
  'GET /api/getLists': {
    lists: ['a', 'b', 'c']
  },
  'GET /api/getListsAsync': (req, res) => {
    console.log(req);
    /* res.json({
      lists: Array(10).fill(req.query.value)
    }) */
    setTimeout(() => {
      /* return fetch('/api/getLists?value=' + value)
      .then(res => res.json())
      .catch(err => {
        console.log(err)
      }) */
      res.json({
        lists: Array(10).fill(req.query.value)
      })
    }, 1000)
  }
}