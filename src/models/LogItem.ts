import { Account } from './Account';
export class LogItem {
    id: number;
    name: string;
    price: string;
    date: Date;
    note: string;
    paymentBy: Account;
    createdBy: Account;
    createdDate: Date;
}
