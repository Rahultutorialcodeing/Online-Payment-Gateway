"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";

export default function page() {
  const ary = [
    {
      id: 1,
      amount: 500,
      img: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/s/r/z/-original-imah3gaqzzz2buxy.jpeg?q=70",
    },
    {
      id: 2,
      amount: 1000,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS95YOcYQp0mxWWcCq3ttLLHs5maoT1LukIQ&s",
    },
  ];

  const onsubmit = async (e: any) => {
    const response = await axios.post("/api/order", {
      amount: e,
    });
    const options: any = {
      key: "rzp_test_Atw5bLWjtE1aU6",
      amount: response.data.amount,
      currency: "INR",
      name: "Tutorial Codeing",
      description: "Laptop buting",
      image: "https://avatars.githubusercontent.com/u/143471844?v=4&size=64",
      order_id: response.data.id,
      callback_url: "http://localhost:3000/api/paymentVerification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const hs: any = window;

    var rzp1: any = new hs.Razorpay(options);
    rzp1.open();
  };

  return (
    <>
      <div className="jd">
        <h1 style={{textAlign:'center',marginBottom:'20px'}}>Add To Cart</h1>

<div className="sjsh">
        {ary.map((v, i) => {
          return (
            <div className="p" key={i}>
              <figure className="">
              <Image alt="" width={200} height={200} src={v.img} />
              </figure>
              <p style={{textAlign:'center', fontSize:'20px', fontWeight:'bold',margin:'20px 0px'}}>₹{v.amount}</p>
             <div style={{display:'flex',justifyContent:'center'}}>
             <button className="kjd"  onClick={() => onsubmit(v.amount)}>Buy Now</button>
             </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}
