const HomePage = () => import("@/pages/Home/home");

const routes = [
    { path: '/home', redirect: '/', meta: { title: '预约送水' } },
    { path: '/', component: HomePage, meta: { title: '预约送水' } },
];

export default routes;