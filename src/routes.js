
import Login from './components/auth/login/Login';
import ResetPasswordLevel1 from './components/auth/forget-password/ResetPasswordLevel1';
import ResetPasswordLevel2 from './components/auth/forget-password/ResetPasswordLevel2';
import ResetPasswordLevel3 from './components/auth/forget-password/ResetPasswordLevel3';
import ResetPasswordSuccessfull from './components/auth/forget-password/ResetPasswordSuccessfull';
import Gallery from './components/admin/gallery/Gallery';
import Partners from './components/admin/partenrs/Partners';

const routes = [
    {
        href: "/",
        isExact: true, 
        component: Login,
    },
    {
        href: "/forget-password/checkEmail",
        isExact: true, 
        component: ResetPasswordLevel1,
    },
    {
        href: "/forget-password/verifyEmail",
        isExact: true, 
        component: ResetPasswordLevel2,
    },
    {
        href: "/forget-password/setPassword",
        isExact: true, 
        component: ResetPasswordLevel3,
    },
    {
        href: "/forget-password/success",
        isExact: true, 
        component: ResetPasswordSuccessfull,
    },
    {
        href: "/admin/gallery",
        isExact: true, 
        component: Gallery,
    },
    {
        href: "/admin/partners",
        isExact: true, 
        component: Partners,
    }
    
]
export default routes
