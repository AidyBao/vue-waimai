import { createApp } from 'vue'
import App from './App.vue'

/** 模拟数据*/
import './api/mock'
/** vuex跨组件保存数据*/
import store from "@/store";
/** rem转换*/
import './css/base.css'
/** 自动适配*/
import 'amfe-flexible'
/** 路由*/
import router from "./router";

/**vant的使用*/
// 1. 引入你需要的组件
import { Button, Icon } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

/**步进器*/
import { Stepper } from 'vant';

/**导航栏*/
import { Tab, Tabs } from 'vant';

/**TreeSelect*/
import { TreeSelect } from 'vant';

/**徽标提示*/
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'

/**轻提示*/
import { Toast } from "vant";
import 'vant/es/toast/style'

/**Checkbox 复选框*/
import { Checkbox, CheckboxGroup } from 'vant';

/**SubmitBar 提交订单栏*/
import { SubmitBar } from 'vant';

/**联系人卡片*/
import { ContactCard } from 'vant';
/**Card 卡片*/
import { Card } from 'vant';

/**Dialog 弹出框*/
import { Dialog } from 'vant';
import 'vant/es/dialog/style'
/** 地址列表*/
import { AddressList } from 'vant';
/**地址编辑*/
import { AddressEdit } from 'vant';
/** 表单*/
import { Form, Field, CellGroup } from 'vant';
/** ElementPlus*/
import ElementPlus from 'element-plus'

const app = createApp(App)
app.use(router);
app.use(ElementPlus)
app.use(store);
app.use(Button);
app.use(Icon);
app.use(Tab);
app.use(Tabs);
app.use(TreeSelect);
app.use(Stepper);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton)
app.use(Toast)
app.use(Checkbox);
app.use(CheckboxGroup);
app.use(SubmitBar);
app.use(ContactCard);
app.use(Card);
app.use(Dialog);
app.use(AddressList);
app.use(AddressEdit);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app')
