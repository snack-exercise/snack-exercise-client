'use client'
import { BlurTitleButton, MiissionButton } from "../common/Button";
import { useRouter } from "next/navigation";
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonLine from "../loading/SkeletonLine";

interface MissionCardProps {
    imgLink?: string;
    groupname?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    member?: boolean;
}

interface MissionType {
    id: number;
    name: string;
    exerciseCategory: string;
    videoLink: string;
    description: string;
    minPerKcal: number;
}

const MissionCard = ({
    imgLink,
    groupname,
    onClick,
    member
}:MissionCardProps) => {
    const [data, setData] = useState<MissionType>();
    const [isLoading, setLoading] = useState(true);

    const router = useRouter();
    const handleBlurTitleButtonClick = () => {
        console.log('!');
        router.push(`/group/mission/${groupname}`);
    }

    useEffect(() => {
        const fetchMission = async () => {
            try {
                    const apiUrl = member ? '/missions/random/member' : `/missions/random/non-member`
                    const response = await getDataClient(apiUrl);
                    console.log('mission:',response.result);
                    setData(response.result.data);
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMission();
        setLoading(false);
    }, [])

    if (isLoading) return (<div className="w-9xl"><SkeletonLine /></div>)
    if (!data) return (<div className="w-9xl"><SkeletonLine /></div>)

    return (
        // <div className={`flex flex-col pt-[200px] items-center justify-evenly h-[320px] w-9xl bg-[url("/imageEx/mission2.svg")] bg-cover bg-center rounded-[16px]`}>
        //     <BlurTitleButton title={title} subtitle={subtitle} onClick={handleBlurTitleButtonClick}/>
        // </div>
        // 회원, 랜덤 운동 미션 
        <Link
            href={{
                pathname: `/group/mission/0`, // random mission
                query: {
                    link: `${data.videoLink}`,
                    id: `${data.id}`,
                    random: true,
                    name: `${data.name}`,
                    member: `${member}`
                },
            }}
            className='w-9xl'
        >
            <MiissionButton title={data.name} subtitle={data.description} onClick={handleBlurTitleButtonClick} bgColor="white"/>
        </Link> 
    );
};

export default MissionCard;