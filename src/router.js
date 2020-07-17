const HomePage = () => import("@/pages/Home/home");
const BindPage = () => import("@/pages/wechat-bind/wechat-bind");
const AppointmentPage = () => import("@/pages/Appointment/appointment");

const routes = [
    { path: '/appointment', component: AppointmentPage, meta: { title: '预约送水' } },
    { path: '/bind', component: BindPage, meta: { title: '微信绑定' } },
    { path: '/home', redirect: '/', meta: { title: 'xxx水行' } },
    { path: '/', component: HomePage, meta: { title: 'xxx水行' } },
];

export default routes;