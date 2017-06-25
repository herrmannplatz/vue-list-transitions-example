new Vue({
  el: '#list-transition-example',
  data: {
    items: [
        {
            id: 0,
            description: 'Click me',
            createdAt: "2017-05-24T18:33:21.324Z",
            done: false
        },
        {
            id: 1,
            description: 'No! me!',
            createdAt: "2017-04-24T18:33:21.324Z",
            done: false
        },
        {
            id: 2,
            description: 'Meeeeeeee!',
            createdAt: "2017-03-24T18:33:21.324Z",
            done: false
        },
    ]
  },
  methods: {
      toggleDone: function(selectedItem) {
          this.items = _
            .chain(this.items)
            .map(item => {
                if (item.id === selectedItem.id) {
                    item.done = !item.done
                }
                return item
            })
            .orderBy(['done', 'createdAt'], ['asc', 'desc'])
            .value()
      }
    }
})