import { ReactElement } from "react";

export interface OrderItem {
    header: string;
    number: number;
    icon: ReactElement; // or use React.FC if the icon is a functional component
    amount: number;
  }


  