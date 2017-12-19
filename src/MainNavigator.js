
import {StackNavigator, TabNavigator} from "react-navigation";
import BookShelfPage from './page/BookShelfPage';
import SettingPage from './page/SettingPage';


const MainNavigator = TabNavigator ({
    BookShelf : {
        screen : BookShelfPage,
        path : "bookshelf",
    } ,

    Setting : {
        screen : SettingPage ,
        path : "setting",
    }
});

export default MainNavigator;