const initial_state = {
  session: {
    name: '',
    logged: false,
    id: 0,
    access_token: null,
  },
  clients: {
    items: [],
    loading: false,
  },
  payments: {
    items: [],
    loading: false,
  }
}

export  default initial_state;
