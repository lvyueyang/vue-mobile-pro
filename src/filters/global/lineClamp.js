import Vue from 'vue'

Vue.filter('lineClamp', function (val, number = 20) {
    if (val.length <= number) {
        return val
    }
    return '...'.padStart(number + 3, val)
})
