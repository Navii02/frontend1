
import { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './components/pages/studentlogin'
import Signup from './components/pages/studentsignup'
import OfficerSignup from './components/pages/OfficerSignup'
import Officerlogin from './components/pages/Officerlogin'
import Home from './components/pages/home'
import DataEditing from './components/pages/DataEditing';
import FeeReminders from './components/pages/FeeReminders';
import NoticeUpdates from './components/pages/NoticeUpdates';
import OfficeHome from './components/pages/OfficeHome';
import UserHome from './components/pages/UserHome';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Certificates from './components/pages/CertificateRequest';
import AdminPage from './components/pages/CertificateDistribution';
import FeeDetails from './components/pages/FeeDetails';
import ScholarshipDetails from './components/pages/ScholarshipDetails';
import AdminDashboard from './components/pages/AdminDashboard';
import FacultyHome from './components/pages/FacultyHome';
import FaculitySignup from './components/pages/faculitysignup';
import FaculityLogin from './components/pages/faculitylogin';
import TutorHome from './components/pages/TutorHome';
import HodHome from './components/pages/HodHome';
import PrinciHome from './components/pages/PrinciHome';
import { UserContext } from './App'
import PrincipalSignup from './components/pages/principalsignup'
import ClasstutorSignup from './components/pages/classtututorsignup'
import ClasstutorLogin from './components/pages/classtutorlogin'
import HodSignup from './components/pages/hodsignup'
import PrincipalLogin from './components/pages/principallogin'
import HodLogin from './components/pages/hodlogin'
import AdminSignup from './components/pages/AdminSignup'
import AdminLogin from './components/pages/AdminLogin'





function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Home />} />  
            <Route path='/studentlogin' element={<Login />} />
            <Route path='/studentsignup' element={<Signup />} />
            <Route path='/officersignup' element={<OfficerSignup />} />
            <Route path='/officerlogin' element={<Officerlogin />} />
            <Route path='/faculitylogin' element={<FaculityLogin />} />
            <Route path='/faculitysignup' element={<FaculitySignup />} />
            <Route path='/classtutorlogin' element={<ClasstutorLogin />} />
            <Route path='/classtutorsignup' element={<ClasstutorSignup />} />
            <Route path='/adminlogin' element={<AdminLogin />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
            <Route path='/hodlogin' element={<HodLogin />} />
            <Route path='/hodsignup' element={<HodSignup />} />
            <Route path="/office" element= {<OfficeHome/>}/>
            <Route path='/principallogin' element={<PrincipalLogin />} />
            <Route path='/principalsignup' element={<PrincipalSignup />} />
            <Route path="/data-editing" element={<DataEditing />} />
            <Route path="/fee-reminders" element={<FeeReminders />} />
            <Route path="/notice-updates" element={<NoticeUpdates />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/certificates-user" element={<Certificates />} />
            <Route path='/certificate-distribution' element={<AdminPage/>}/>
            <Route path='/fee-details' element ={<FeeDetails/>}/>
            <Route path='/scholarships' element ={<ScholarshipDetails/>}/>
            <Route path='/dash' element ={<AdminDashboard/>}/>
            <Route path='/fchome' element ={<FacultyHome/>}/>
            <Route path='/thome' element={<TutorHome/>}/>
            <Route path='/hodhome' element={<HodHome/>}/>
            <Route path='/phome' element={<PrinciHome/>}/>
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesComp