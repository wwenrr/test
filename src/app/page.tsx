import Image from "next/image";
const secretKey = process.env.REACT_APP_SECRET_KEY;

export default function Home() {
  return (
    <div style={{fontSize: '150px'}}>
        {secretKey}
    </div>
  );
}
