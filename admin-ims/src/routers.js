import { Dashboard } from "./views/pages/dashboard/Dashboard";
import { Projects } from "./views/pages/project-pages/projects/Projects";
import { ProjectOutlined, DashboardOutlined, OrderedListOutlined, ScheduleOutlined, FileTextOutlined, DatabaseOutlined  } from '@ant-design/icons'
import { PfmPage } from "./views/pages/pfm-page/pfmPage";
import { Report } from "./views/pages/report/kpisetting";

const routers = [
    // {
    //     path: '/',
    //     title: "Dashboard",
    //     icon: <DashboardOutlined />,
    //     component: <Dashboard />,
    //     children: [],
    //     exact: true
    // },
    {
        path: '/projects',
        title: "Projects",
        icon: <ProjectOutlined />,
        component: '',
        children: [
            {
                path: '/project-list',
                title: "PROJECT LIST",
                icon: <OrderedListOutlined />,
                component: <Projects />,
                children: [],
            },
            {
                path: '/emp-schedule',
                title: "EMP SCHEDULE",
                icon: <ScheduleOutlined />,
                component: <div>EMP SCHEDULE</div>,
                children: [],
            },
            {
                path: '/pfm-page/:id',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage />,
                children: [],
                
            },
        ],
    },
    {
        path: '/report',
        title: "REPORT",
        icon: <FileTextOutlined />,
        component: '',
        children: [
            { 
                path: '/kpi-setting',
                title: "KPI SETTING",
                icon: <DatabaseOutlined />,
                component: <Report />,
                children: [],
            }
        ],
    },
    {
        path: '/leave',
        title: "LEAVE",
        icon: <FileTextOutlined />,
        component: '',
        children: []
    }
]

export default routers;