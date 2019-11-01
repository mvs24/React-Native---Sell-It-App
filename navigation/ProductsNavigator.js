import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductsDetailScreen from '../screens/ProductsDetailScreen'
import OrderScreen from '../screens/OrderScreen'

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductsDetail: ProductsDetailScreen,
    Order: OrderScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#7178D8'
        },
        headerTintColor: '#fff'
    }
});


export default createAppContainer(ProductsNavigator);