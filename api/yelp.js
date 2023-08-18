import axios from 'axios';


export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
          'Bearer iCG6VSF6mvnuRu82LOcYh7UrNtuD7SgSNR8wbWJZSsJjOyQ0r06OtG3vHn76xPMUlVCx-xF42HKzYZrRz1LRmp70qhSmG4v5bhR1HTHKN0lQDxv3G_OCd4Ib9yreZHYx',
      },
});