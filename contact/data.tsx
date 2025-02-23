
import { SideBarInnerProps } from "@/app/component/sidebar/index.types";
import { Order,Revenue,MonthTotal,Approved,BlueCircle,OrangeCircle,SmallGreenCircle,SmallPurpleCircle, Wallet, Funds,Analytics,Products,Messages,Customers,Settings,Logout} from "@/assets/svg";
import { ReactElement } from "react";

export type UserDetail = {
  header: string;
  BigText: string | number; 
  userType: string;
  userTypeTwo: string;
  color?: string;
  icon: ReactElement; 
};

export interface MoreDetail {
  header: string;
  invoice: string; 
  content: string;
  icon2: ReactElement; 
  icon1: ReactElement;
}

export interface OrderItemProps {
  header: string;
  number: number;
  icon: ReactElement;
  amount:String;
}

export const OrderItems:OrderItemProps[] = [
  {
    header: "Order",
    number: 201,
    icon:<Order/>, 
    amount: "$2.3",
  },
  {
    header: "Approved",
    number: 56,
    icon: <Approved />, 
    amount: "$2.3",
  },
  {
    header: "Month total",
    number: 25643,
    icon: <MonthTotal/>,
    amount: "$2.3",
  },
  {
    header: "Revenue",
    number: 1463,
    icon: <Revenue />,
    amount: "$2.3",
  },
];



export const userDetails: UserDetail[] = [
  {
    header: "Users",
    BigText: "5614",
    userType: "User Type 1",
    userTypeTwo: "User Type 2",
    color: "yellow",
    icon: <OrangeCircle />,
  },  
  {
    header: "Subscription",
    BigText: "1256",
    userType: "User Type 1",
    userTypeTwo: "User Type 2",
    color: "blue",
    icon: <BlueCircle/>,
  },
];



export const moreDetails:MoreDetail[] = [
    {
      header:"Paid Invoices",
      invoice: "$565614",
      content:"Current financial state",
      icon2:<SmallGreenCircle/>,
      icon1:<Wallet/>
    },
    {
      header:"Funds received",
      invoice: "$425634",
      content:"Current financial state",
      icon2:<SmallPurpleCircle/>,
      icon1:<Funds/>
    },

]


export const sidebarcontent:SideBarInnerProps[] = [
    {
      icon:<Analytics/>,
      path:"/dashboard/Analytics",
      isActive:true,
      title:'Analytics',
    },
    {
      icon:<Products/>,
      path:"/dashboard/Products",
      isActive:true,
      title:'Products',
    },
    {
      icon:<Messages/>,
      path:"/dashboard/Messages",
      isActive:true,
      title:'Messages',
    },
    {
      icon:<Customers/>,
      path:"/dashboard/Customers",
      isActive:true,
      title:'Customers',
    },
]

export const footerbarcontent:SideBarInnerProps[] = [
  {
    icon:<Settings/>,
    path:"/dashboard/Settings",
    isActive:true,
    title:'Settings',
  },
  {
    icon:<Logout/>,
    path:"/dashboard/Logout",
    isActive:true,
    title:'Logout',
  },
]