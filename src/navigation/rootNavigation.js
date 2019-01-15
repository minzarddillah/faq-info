import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import QuestInfo from '../components/QuestInfo/QuestInfo.container'
import Home from '../components/Home/Home.container';

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  QuestInfo: {
    screen: QuestInfo
  }
})

export default createAppContainer(HomeStack);
