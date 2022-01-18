import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 0DsgZqs9i_6PY3jTw5vTLN2u91JHvuL4dfNRr2t76NVNflYn-y6neVHRSBfKilNAH2vZCldjJiSj-8mZxvPC7cPT4pbaFaKLrAVUXo22XXXv2oVUSEOhOxqFMm6zYXYx'
    }
})
