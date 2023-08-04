
export interface avatar  {
    src:string;
    className:string
}


 export interface postContent {
    type: "paragraph" | "link";
    content: string;
  }
  
 export interface PostProps {
    author: string;
    role?: string;
    avatarUrl: string;
    postContent: postContent[];
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


export interface commentContent {
  content:string
}