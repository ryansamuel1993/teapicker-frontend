import { useRouter } from 'next/router';

export default function BlogPost() {
  const { slug } = useRouter().query;
  return <h1>Blog Post: {slug}</h1>;
}
