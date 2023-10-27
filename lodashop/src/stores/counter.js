import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      baseURL: 'http://localhost:3000',
      isAuthenticated: localStorage.getItem('access_token') ? true : false,

      games: [],

      transactions: [],
      histories: [],

      qrcode: '',
      midtranstoken: ''
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

        //axios selalu membawa sebagai {data}
        //dibawah akan dikirim ke controller getGamewithpagination
        const { data } = await axios({
          url: this.baseURL + endpoint,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        console.log(data)
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
        // console.log(id, 'hallo')
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
    async postHistories(id) {
      try {
        console.log(id)
        await axios({
          method: 'post',
          url: this.baseURL + '/histories/' + id,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
      } catch (error) {
        console.log(error)
      }
    },
    async midtranstoken(id) {
      try {
        const cbHistories = this.postHistories
        const { data } = await axios({
          method: 'post',
          url: this.baseURL + '/midtranstoken',
          data: { id }, //dikirim ke generatemidtranstoken,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.midtranstoken = data.transactionToken

        window.snap.pay(data.transactionToken, {
          onSuccess: async function (result) {
            /* You may add your own implementation here */
            await cbHistories(id)

            Toast.fire({
              icon: 'success',
              title: 'Success'
            })
            // alert('payment success!')
            //alert bawaan windows

            console.log(result)
          },
          onPending: function (result) {
            /* You may add your own implementation here */
            // alert('wating your payment!')

            console.log(result)
          },
          onError: function (result) {
            /* You may add your own implementation here */
            // alert('payment failed!')

            Toast.fire({
              icon: 'error',
              title: 'Failed'
            })
            console.log(result)
          },
          onClose: function () {
            /* You may add your own implementation here */
            // alert('you closed the popup without finishing the payment')
            Toast.fire({
              icon: 'error',
              title: 'you closed the popup without finishing the payment'
            })
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
})
