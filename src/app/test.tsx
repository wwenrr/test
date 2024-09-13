'use client'

import React, { useEffect } from "react";
import { useState } from "react";
import './style.scss'


let value:number = 0;
const readNumber = (num: number): string => {
  if(isNaN(num)) {
    value = 0;
    return "kêu nhập số không nhập, nhập cái khác ăn cc à cu"
  }

  const length = (num: number): number => {
    return num.toString().length;
  };

  const tien = {
      "0": "không",
      "1": "một",
      "2": "hai",
      "3": "ba",
      "4": "bốn",
      "5": "năm",
      "6": "sáu",
      "7": "bảy",
      "8": "tám",
      "9": "chín",
    };

  const hang_chuc = (num: number): string => {
    const len = length(num);
    if(num === 0) return ""
    if(len >= 2) {
      let output = "";
      const so_thu_hai = num % 10
      const so_thu_nhat = Math.floor(num/10);
      
      if(so_thu_nhat === 1) {
        output = "mười";
        if(so_thu_hai === 5) output += " lăm"
        else if(so_thu_hai === 0) output += ""
        else output += " " + tien[so_thu_hai.toString() as keyof typeof tien];
      }
      else {
        output = tien[so_thu_nhat.toString() as keyof typeof tien] + " mươi";

        if(so_thu_hai === 5) output += " lăm"
        else if(so_thu_hai === 1) output += " mốt"
        else if(so_thu_hai === 0) output += ""
        else output += " "+tien[so_thu_hai.toString() as keyof typeof tien]
      }

      return output
    }
    else return tien[num.toString() as keyof typeof tien]
  }

  const hang_tram = (num:number) : string => {
    const don_vi = num % 10;
    const chuc = Math.floor(num/10) % 10
    const tram = Math.floor(num/100) % 10

    if(chuc === 0 && don_vi !== 0) {
      return tien[tram.toString() as keyof typeof tien] + " trăm" + " lẻ " + tien[don_vi as unknown as keyof typeof tien];
    }
    const hai_so_dau:string = hang_chuc(chuc*10 + don_vi)

    return tien[tram.toString() as unknown as keyof typeof tien] + " trăm" + (hai_so_dau !== "" ? (" " + hai_so_dau) : "");
  }

  const main = (num:number) : string => {
    const len = length(num)

    const don_vi = {
      0: "đồng",
      1: "nghìn",
      2: "triệu",
      3: "tỷ",
      4: "triệu tỷ",
      5: "tỷ tỷ"
    }

    const temp:string = num.toString()
    let output = ""
    
    for(let i:number = 0; i < len;) {
      let nhom_ba_chu_so = () : number => Math.floor((len-i-1)/3);
      const save = nhom_ba_chu_so()

      let s:string = ""
      while(save ===  nhom_ba_chu_so()) {
        s = s + temp[i]
        i++
      }

      // console.log(save)
      if(s.length === 3) {
        if(s === '000') {
          console.log(output)
          if(save === 0) {output = output + " đồng"}
        }
        else output = output + " " + hang_tram(parseInt(s)) + " " + don_vi[save.toString() as unknown as keyof typeof don_vi]
      }
      else if(s.length == 2) {
        output = output + " " + hang_chuc(parseInt(s)) + " " + don_vi[save.toString() as unknown as keyof typeof don_vi]
      }
      else {
        output = output + " " + tien[s as unknown as keyof typeof tien] + " " + don_vi[save.toString() as unknown as keyof typeof don_vi] 
      }
    }

    return output;
  }

  return main(num);
}

export default function Main( {props}:any) {
    const [text, setText] = useState('nhập đại số nào đi')
      
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        value = e.target.value.length === 0 ? 0 : parseInt(e.target.value.replace(/\./g, '')); 

        if(value === 0) {
          setText('nhập đại số nào đi')
        }
        else if(Number.isNaN(value)) {
          setText("kêu nhập số không nhập, nhập cái khác ăn cc à cu");
          value = 0;
        }
        else if(value.toString().length > 18) {
          setText("Số lớn quá thì chịu rồi! :<")
        }
        else {

          setText(prev => readNumber(value))
          e.target.value = new Intl.NumberFormat('vi-VN').format(value);
        }
    }

    return(
        <>
            <div style={{fontSize: '25px'}} className="main">
                <input type="text" onChange={handleChange}/>
                <div className="">{text}</div>
            </div>
        </>
    )
}