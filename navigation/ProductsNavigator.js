import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductsDetailScreen from '../screens/ProductsDetailScreen';
import OrderScreen from '../screens/OrderScreen';
import OrderedScreen from '../screens/OrderedScreen';

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductsDetail: ProductsDetailScreen,
    Order: OrderScreen,
    Ordered: OrderedScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#7178D8'
        },
        headerTintColor: '#fff'
    }
});


export default createAppContainer(ProductsNavigator);