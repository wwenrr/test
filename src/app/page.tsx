import Image from "next/image";
const secretKey = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  console.log(secretKey)

  return (
    <div style={{fontSize: '150px'}}>
        API key là: {secretKey ? secretKey : "không tìm thấy"}
    </div>
  );
}
