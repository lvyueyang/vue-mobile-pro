import Vue from 'vue'
import utils from '../../utils/utils'

Vue.filter('phoneHidden', function (val) {
    return utils.phoneHidden(val)
})
