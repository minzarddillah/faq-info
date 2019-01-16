import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import QuestInfo from '../components/QuestInfo/QuestInfo.container'
import Home from '../components/Home/Home.container';
import RedeemVoucher from '../components/RedeemVoucher/RedeemVoucher.container';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  QuestInfo: {
    screen: QuestInfo
  },
  RedeemVoucher: {
    screen: RedeemVoucher
  }
})

export default createAppContainer(HomeStack);
