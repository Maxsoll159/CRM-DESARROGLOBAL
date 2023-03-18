 interface LogoProps {
    src: string;
    type: 'webp' | 'png' | 'jpg' | 'jpeg' | 'bmp' | 'ico' | 'svg';
    width: number;
    height: number;
    margin: {
        top: number;
        left: number;
    };
}

interface StampProps {
    inAllPages: boolean;
    src: string;
    type: 'webp' | 'png' | 'jpg' | 'jpeg' | 'bmp' | 'ico' | 'svg';
    width: number;
    height: number;
    margin: {
        top: number;
        left: number;
    };
}

interface BusinessProps {
    name: string;
    address: string;
    phone: string;
    email: string;
    website?: string;
}

interface ContactProps {
    label: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    otherInfo?: string;
}

interface InvoiceHeader {
    title: string;
    style?: {
        width?: number;
    };
}

interface AdditionalRow {
    col1: string;
    col2: string;
    col3: string;
    style?: {
        fontSize?: number;
    };
}

interface InvoiceProps {
    label: string;
    num: number;
    invDate: string;
    invGenDate: string;
    headerBorder?: boolean;
    tableBodyBorder?: boolean;
    header: InvoiceHeader[];
    table: any[][];
    additionalRows?: AdditionalRow[];
}

interface FooterProps {
    text: string;
}

export interface Props {
    outputType: any;
    returnJsPDFDocObject?: boolean;
    fileName: string;
    orientationLandscape?: boolean;
    compress?: boolean;
    logo?: LogoProps;
    stamp?: StampProps;
    business: BusinessProps;
    contact: ContactProps;
    invoice: InvoiceProps;
    footer: FooterProps;
    pageEnable?: boolean;
    pageLabel?: string;
}