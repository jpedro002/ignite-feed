
export interface avatar  {
    src:string;
    className:string
}


export interface Post {
id: number;
author: {
    avatarUrl: string;
    name: string;
    role?: string;
};
content: Array<{
    type: 'paragraph' | 'link';
    content: string;
}>;
}
