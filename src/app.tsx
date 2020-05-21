import Taro, { Component, Config } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.scss";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ["pages/index/index", "pages/user/index"],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTextStyle: "black",
      navigationBarTitleText: "微信接口功能演示",
      backgroundColor: "#eeeeee"
    },
    networkTimeout: {
      request: 60000,
      downloadFile: 60000,
      uploadFile: 60000
    },
    tabBar: {
      color: "#cdcdcd",
      selectedColor: "#000",
      backgroundColor: "ffffff",
      borderStyle: "black",
      list: [
        {
          pagePath: "pages/index/index",
          iconPath: "./static/image/dan.png",
          selectedIconPath: "./static/image/select-dan.png",
          text: "首页"
        },
        {
          pagePath: "pages/user/index",
          iconPath: "./static/image/user.png",
          selectedIconPath: "./static/image/select-user.png",
          text: "用户中心"
        }
      ]
    },
    requiredBackgroundModes: ["audio"],
    resizable: false,
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
    // debug: true
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
