import { FiUsers } from 'react-icons/fi'
import { AiFillSetting } from 'react-icons/ai'
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiProfileLine } from "react-icons/ri";
import { FaCloudUploadAlt } from "react-icons/fa";
// import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
// import { MdManageAccounts } from "react-icons/md";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { FaUserInjured } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
export const SidebarData = [
    {
        icons:<MdDashboard />,
        name: 'Dashboard',
        path: '/dashboard',
    },
    {
        icons:<RiProfileLine />,
        name: 'Institutions Profile',
        path: '/iprofile',
    },
    {
        icons:<FaCloudUploadAlt />,
        name: 'Upload files',
        path: '/upload',
    },
    // {
    //     icons:<MdOutlineSystemSecurityUpdateGood />,
    //     name: 'Client App',
    //     path: '/client',
    // },
    {
        icons:<FiUsers />,
        name: 'Users',
        path: '/users',
    },
    // {
    //     icons:<MdManageAccounts />,
    //     name: 'Shift Management',
    //     path: '/smanagement',
    // },
    {
        icons:<FaUserInjured />,
        name: 'Patient',
        path: '/patient',
    },
    {
        icons:<FaUserInjured />,
        name: 'Stock (Drug List)',
        path: '/stock',
    },
    {
        icons:<FaUserInjured />,
        name: 'Outpatient',
        path: '/outpatient',
    },
    {
        icons:<FaUserInjured />,
        name: 'Inpatient',
        path: '/inpatient',
    },
    {
        icons:<MdPlaylistAddCheckCircle />,
        name: 'Pharmacy Sales',
        path: '/phamacySales',
    },
    // {
    //     icons:<FaUserInjured />,
    //     name: 'Clinic Services',
    //     path: '/ClinicServices',
    // },
    {
        icons:<AiFillSetting />,
        name: 'Settings',
        path: '/setting',
    },
    {
        icons:<AiFillSetting />,
        name: 'Ads',
        path: '/Ads',
    },
    {
        icons:<BiSolidReport />,
        name: 'Reports',
        path: '/reports',
    },
    {
        icons:<ImProfile />,
        name: 'Profile',
        path: '/profile',
    },
]