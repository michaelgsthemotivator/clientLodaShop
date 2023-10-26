import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      baseURL: 'http://localhost:3000',
      isAuthenticated: localStorage.getItem('access_token') ? true : false,

      games: [],

      transactions: [],
      histories: [],

      qrcode: ''
    }
  },
  actions: {
    async login(loginData) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseURL + '/login',
          data: loginData
        })

        return data
      } catch (error) {
        return error
      }
    },
    async register(registerData) {
      try {
        await axios({
          method: 'post',
          url: this.baseURL + '/register',
          data: registerData
        })
        return data
      } catch (error) {
        return error
      }
    },
    async getGames(filter, page = 1) {
      try {
        let endpoint = '/games'

        if (filter) {
          endpoint += `?filter=${filter}&page=${page}`
        } else if (!filter) {
          endpoint += `?page=${page}`
        }

        const { data } = await axios({
          url: this.baseURL + endpoint,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.games = data
        if (data.length <= 0) {
          return page - 1
        }
      } catch (error) {
        console.log(error)
      }
    },
    async gameById(id) {
      try {
        console.log(id, 'hallo')
        const { data } = await axios({
          url: this.baseURL + '/games/' + id,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.games = data
      } catch (error) {
        console.log(error)
      }
    },
    async getTransactions(id) {
      try {
        const { data } = await axios({
          url: this.baseURL + '/transactions/',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.transactions = data.filter((transactions) => transactions.GameId == id) //2 kali sama dengan,,
      } catch (error) {
        console.log(error)
      }
    },
    async getHistories() {
      try {
        const { data } = await axios({
          url: this.baseURL + '/histories/',
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.histories = data
      } catch (error) {
        console.log(error)
      }
    },
    async generateQrCode(urlData) {
      try {
        const { data } = await axios({
          method: 'post',
          url: this.baseURL + '/qr-code',
          data: {
            url: urlData
          },
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })

        this.qrcode = data
      } catch (error) {
        console.log(error)
      }
    },
    async topup(price) {
      try {
        await axios({
          method: 'post',
          url: this.baseURL + '/register',
          data: registerData
        })

        window.snap.embed('YOUR_SNAP_TOKEN', {
          embedId: 'snap-container',
          onSuccess: function (result) {
            /* You may add your own implementation here */
            alert('payment success!')
            console.log(result)
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            alert('wating your payment!')
            console.log(result)
          },
          onError: function (result) {
            /* You may add your own implementation here */
            alert('payment failed!')
            console.log(result)
          },
          onClose: function () {
            /* You may add your own implementation here */
            alert('you closed the popup without finishing the payment')
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
