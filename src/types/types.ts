export interface PostProps {
  author: string;
  role?: string;
  avatarUrl: string;
  postContent: string;
}

export interface post {
  id: number;
  avatarUrl: string;
  name: string;
  role: string;
  paragraph: string;
  link: string;
}

