'use client'
import {getDataClient} from "@/utils/getDataClient";
import { useEffect, useState } from "react";
import { BlurTitleButton, MiissionButton } from "../common/Button";
import Link from "next/link";
import SkeletonCard from "../loading/SkeletonCard";

interface GroupMissionCardProps {
    groupId : number;
    finishedRelayCount: number;
}

interface MissionResType {
    missionId: number;
    finishedRelayCount: number;
    currentRoundPosition: number;
    exercise: ExerciseType;
}

interface ExerciseType {
    id: number;
    name: string;
    exerciseCategory: string;
    videoLink: string;
    description: string;
    minPerKcal: number;
}

export default function GroupMissionCard({
    groupId,
    finishedRelayCount
}:GroupMissionCardProps) {
    const [data, setData] = useState<MissionResType>();
    const [isLoading, setLoading] = useState(true);
    const [isMission, setIsMission] = useState(true);

    const handleClick = () => {
        console.log('hi')
    }

    useEffect(() => {
        const fetchMission = async () => {
            try {
                  const response = await getDataClient(`/missions/groups/${groupId}`);
                  console.log('mission:',response.result);
                  setData(response.result.data);
                  if (response.result.message === "미션이 존재하지 않습니다."){
                    setIsMission(false);
                  }
              } catch (error) {
                  console.error('Error in fetchData:', error);
              }
        };
        fetchMission();
        setLoading(false);
    }, [groupId])
    
    if (isLoading) return <div><SkeletonCard/></div>
    if (!isMission) return <p>미션 시간이 아닙니다</p>
    if (!data) return <div><SkeletonCard/></div>

    return (
        // 회원 릴레이 운동 미션
        <Link
            href={{
                pathname: `/group/mission/${groupId}`,
                query: {
                    link: `${data.exercise.videoLink}`,
                    id: `${data.missionId}`,
                    random: false,
                    name: `${data.exercise.name}`,
                },
            }}
            className='w-full'
        >
            <MiissionButton title={data.exercise.name} subtitle={`릴레이 ${data.finishedRelayCount===null ? 1 : data.finishedRelayCount}회차 ${data.currentRoundPosition}번째`} onClick={handleClick} bgColor="SystemGray6"/>
        </Link>
    )
}
