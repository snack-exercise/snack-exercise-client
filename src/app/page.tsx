'use client'

import MissionCard from "@/components/card/MissionCard";
import { IconVerticalButton } from "@/components/common/Button";
import GuideSwiper from "@/components/card/GuideSwiper";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

import { People } from "@/constant/icon";
import { Mail } from "@/constant/icon";

import UserStore from "@/store/UserStore";


const Page = () => {
    const {isLogin, userLogin, userLogout} = UserStore();
    const router = useRouter();
    const handleClick = () => {
        console.log('!')
    }
    const handleGruopClick = () => {
        router.push('/group/create');
    }

    useEffect(()=>{
      if(!isLogin){
        console.log(isLogin);
        router.replace('/login')
      }
    },[])
    
    return (
        <div className="flex flex-col items-center">
            <div className="text-SystemGray4 text-[14px] font-normal pb-[32px]">
                가입된 그룹이 없습니다
            </div>
            <div className="text-[20px] font-bold w-9xl pb-[16px]">
                그룹 가이드
            </div>
            <div className="flex items-center">
                <GuideSwiper />
            </div>
            <div className="pb-[40px]"></div>
            <div className="flex justify-between w-9xl">
                <IconVerticalButton title="그룹 만들기" onClick={handleGruopClick} imglink={People}/>
                <IconVerticalButton title="초대 코드" onClick={handleClick} imglink={Mail}/>
            </div>
            <div className="text-[20px] font-bold w-9xl pb-[16px] pt-[40px]">
                랜덤으로 운동 미션 받기
            </div>
            <MissionCard title="3분 동안 스쿼트" subtitle='미션 수행하기' />
        </div>
    );
};

export default Page;