import Image from "next/image";
const secretKey = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  console.log(secretKey)

  return (
    <div style={{fontSize: '25px'}}>
        API key là: {secretKey=='1234' ? "tìm thấy" : "không tìm thấy"}
    </div>
  );
}
