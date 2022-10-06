import { Dashboard } from "./views/pages/dashboard/Dashboard";
import { Projects } from "./views/pages/project-pages/projects/Projects";
import { ProjectOutlined, DashboardOutlined, OrderedListOutlined, ScheduleOutlined, FileTextOutlined, DatabaseOutlined  } from '@ant-design/icons'
import { PfmPage1 } from "./views/pages/pfm-page/pfmPage1";
import { PfmPage2 } from "./views/pages/pfm-page/pfmPage2";
import { PfmPage3 } from "./views/pages/pfm-page/pfmPage3";
import { PfmPage4 } from "./views/pages/pfm-page/pfmPage4";
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
                path: '/project/list',
                title: "PROJECT LIST",
                icon: <OrderedListOutlined />,
                component: <Projects />,
                children: [],
            },
            {
                path: '/empschedule',
                title: "EMP SCHEDULE",
                icon: <ScheduleOutlined />,
                component: <div>EMP SCHEDULE</div>,
                children: [],
            },
            {
                path: '/project/performance/1',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage1 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/2',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage2 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/3',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage3 />,
                children: [],
                hidden: true
            },
            {
                path: '/project/performance/4',
                title: "PFM MANAGEMENT",
                icon: <OrderedListOutlined />,
                component: <PfmPage4 />,
                children: [],
                hidden: true
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
                path: '/kpi',
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