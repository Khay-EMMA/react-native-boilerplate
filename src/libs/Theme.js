import {_responsive} from '../components/style_helpers';

export default {
    dark: {
        text: '#fff',
        primary: 'rgba(0,0,0,.16)',
        _3: '#fff'
    },
    light: {
        text: '#334D6E',
        primary: 'rgb(63,172,157)',
        _3: '#334D6E'
    },
    responsive: _responsive,

    gutter:{
        sm: 10,
        md: 25,
        lg: 40,
        statusBar: _responsive([20, 50]),
        padded: _responsive([15, 30]),
    }
}